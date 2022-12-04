require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// I used .ENV extension. This part is critical. If your Metamask/or related private key is shared openly. Your metamask account can be stolen.
