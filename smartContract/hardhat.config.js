require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const MUMBAI_ID = process.env.MUMBAI_ID
const PRIV_KEY = process.env.PRIV_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url:  `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_ID}`,
      accounts: [PRIV_KEY] 
    }
  },
  solidity: "0.8.18",
};
