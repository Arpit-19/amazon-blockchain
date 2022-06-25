require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: 'rinkeby',
  networks: {
    rinkeby: {
      url: "https://speedy-nodes-nyc.moralis.io/1c07a2cb8738a377117bb3bc/eth/rinkeby",
      accounts: ['f1ba21172f552e9cf34b121da83b397d3389e111c967b7bc6de511446759b944'],
    },
  },
  etherscan: {
    // Your API Key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "QHJTXYFVMEUXI3SMAGM3BYCZ6T4B28TTTZ"
  }
};
