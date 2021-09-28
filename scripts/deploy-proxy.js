const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const proxy = await upgrades.deployProxy(Box, [5], { initializer: 'store' });
  await proxy.deployed();
  console.log("Box (proxy) deployed to:", proxy.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });