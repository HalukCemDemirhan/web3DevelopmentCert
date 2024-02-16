require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "zG4nBUMZXVWTf272OkIB3qh0WdO2z_wq";

const SEPOLIA_PRIVATE_KEY = "7058d60059e5885fdc64012ba284f327ab0be1b0c126d69e03807255101e9f81";

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};