/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
require("@nomiclabs/hardhat-waffle");

const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.5.16",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    kovan: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
