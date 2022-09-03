const { ethers } = require("hardhat");

const main = async () => {
 const contractFactory = await hre.ethers.provider.getContractFactory()
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
