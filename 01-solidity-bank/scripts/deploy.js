const { ethers } = require("hardhat");

const main = async () => {
  let acc1, acc2;
  [owner, acc1, acc2, acc3, acc4, acc5, acc6, acc7, acc8, acc9] =
    await ethers.getSigners();

  const bankFactory = await hre.ethers.getContractFactory("Bank", owner);

  const bankDeploy = await bankFactory.connect(acc9).deploy();

  await bankDeploy.deployed();

  console.log("Bank contract was deployed:", bankDeploy.address);

  // balance of acc1
  const bal = await ethers.provider.getBalance(acc1.address);
  console.log("balance of acc1", bal);

  // balance of contract
  const contractBalance1 = await ethers.provider.getBalance(bankDeploy.address);
  console.log("balance of contrac", contractBalance1);

  //create transaction from acc1 to contract address
  const transaction = await acc1.sendTransaction({
    to: bankDeploy.address,
    value: ethers.utils.parseEther("0.5"),
  });

  // balance of acc1 after transaction
  const bal1 = await ethers.provider.getBalance(acc1.address);
  console.log("balance of acc1 after transaction", bal1);

  // balance of contract after transaction
  const contractBalance = await ethers.provider.getBalance(bankDeploy.address);
  console.log("balance of contract after transaction", contractBalance);

  const comission = (Number(bal) - Number(bal1) - Number(transaction.value))/Number(transaction.value);
  console.log("comission", comission,"ETH");
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
