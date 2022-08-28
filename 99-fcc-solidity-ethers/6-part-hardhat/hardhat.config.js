require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

const goerliURL = process.env.GOERLI_RPC_URL;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY;
const etherscanApi = process.env.ETHERSCAN_API;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    ganage: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "c392d752cb452bcfad71fc85b77384153a227d8069222f10ddf37a95d6e9da2e",
      ],
      chainId: 1337,
    },
    goerli: {
      url: goerliURL,
      accounts: [goerliPrivateKey],
      chainId: 5,
    },
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: etherscanApi,
  },
};
