const hre = require('hardhat')

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying Contracts with the account", deployer.address);

    console.log("Account Balance: ", (await deployer.getBalance()).toString());

    const amazonCoinFactory = await ethers.getContractFactory("AmazonCoin");
    const amazonCoin = await amazonCoinFactory.deploy();

    await amazonCoin.deployed();

    console.log("Amazon Coin deployed to:", amazonCoin.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });