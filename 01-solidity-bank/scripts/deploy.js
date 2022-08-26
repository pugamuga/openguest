const { ethers } = require("hardhat");

const main = async () => {
  let acc1, acc2;
  [owner, acc1, acc2, acc3, acc4, acc5, acc6, acc7, acc8, acc9] =
    await ethers.getSigners();

  const bankFactory = await hre.ethers.getContractFactory("Bank", owner);

  const bankDeploy = await bankFactory.connect(acc9).deploy();

  await bankDeploy.deployed();

  console.log("Bank contract was deployed:", bankDeploy.address);

  const bal = await ethers.provider.getBalance(acc1.address);
  console.log(bal);

  const transaction = await acc1.sendTransaction({
    to: bankDeploy.address,
    value: ethers.utils.parseEther("1.0"),
  });

  const bal1 = await ethers.provider.getBalance(acc1.address);
  console.log(bal1);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
