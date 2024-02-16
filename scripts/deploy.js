const hre  = require("hardhat")


async function main() {


    const [owner] = await ethers.getSigners();

    const Increment = await hre.ethers.getContractFactory("increment");
    const increment = await Increment.deploy();

    await increment.waitForDeployment();

    console.log("Owner address is: ", owner.address);
    console.log("increment deployed at: ", increment.target);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });