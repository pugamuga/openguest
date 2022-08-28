const { ethers, run } = require("hardhat");
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const main = async () => {
  const storageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying...");
  const contract = await storageFactory.deploy();
  const contractDeployed = await contract.deployed();
  console.log(`Contract deployed on this address: ${contract.address}`);
  console.log(`Wait 6 blocks confirmations...`);
  await contract.deployTransaction.wait(6);
  await verify(contract.address, []);

  const firstRetrieve = await contract.retrieve();
  console.log(`Current number is: ${firstRetrieve}`);

  const store = await contract.store(5);
  await store.wait(1)

  const secondRetrieve = await contract.retrieve();
  console.log(`Current number is: ${secondRetrieve}`);
};

const verify = async (contractAddress, args) => {
  try {
    console.log(`Verifying contract...`);
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract already verified");
    } else {
      console.log(error);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(`Error: ${error}`);
    process.exit(1);
  });
