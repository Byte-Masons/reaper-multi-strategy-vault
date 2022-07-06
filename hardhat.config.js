require('dotenv').config();

require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('hardhat-interface-generator');
require('hardhat-contract-sizer');
require('solidity-coverage');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.11',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    mainnet: {
      url: `https://rpc.ftm.tools`,
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  mocha: {
    timeout: 1200000,
  },
};
