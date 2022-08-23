const { ethers } = require("hardhat");

const main = async () => {
  let acc1, acc2;
  [owner, acc1, acc2] = await ethers.getSigners();

  const bankFactory = await hre.ethers.getContractFactory("Bank", owner);

  const bankDeploy = await bankFactory.deploy();

  await bankDeploy.deployed();

  console.log("Bank contract was deployed:", bankDeploy.address);

  //await bankDeploy.balanceOf(acc1);
  const bal = await ethers.provider.getBalance(bankDeploy.address);
  const ownerBal = await ethers.provider.getBalance(owner.address);
  console.log(ownerBal, bal);

  const transaction = await owner.sendTransaction({
    to: bankDeploy.address,
    value: ethers.utils.parseEther("2"),
  });
  const transaction1 = await acc1.sendTransaction({
    to: bankDeploy.address,
    value: ethers.utils.parseEther("1"),
  });

  //await bankDeploy.getContractBalance()
  const bal1 = await ethers.provider.getBalance(bankDeploy.address);
  const ownerBal1 = await ethers.provider.getBalance(owner.address);

  console.log(ownerBal1, bal1);

  await bankDeploy.getSender(owner.address)
  await bankDeploy.getSender(acc1.address)
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
