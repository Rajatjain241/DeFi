import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";

const INFURA_API_KEY = "e5e1f07bbce3486598aeee1d006b7c91";
const GOERLI_PRIVATE_KEY =
  "b17fa4c5bd9719e9d6152a9c56b174029f424f47309f22a3fe027a67badb60ab";

module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 10,
    enabled: process.env.GAS_REPORTER !== undefined ? true : false,
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
    only: [],
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
  },
};
