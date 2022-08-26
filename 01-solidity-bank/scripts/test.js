const { ethers } = require("hardhat");

const main = async () => {
  let acc1, acc2;
  [owner, acc1, acc2, acc3, acc4, acc5, acc6, acc7, acc8, acc9] =
    await ethers.getSigners();

  const bankFactory = await hre.ethers.getContractFactory("Bank", owner);

  const myOldContract = await bankFactory.attach(
    "0x6379ebD504941f50D5BfDE9348B37593bd29C835"
  );

  //const getMap = await myOldContract.getMapping("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
  //console.log(getMap);

  const justTest = await myOldContract.justTest();
  console.log(justTest);
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
