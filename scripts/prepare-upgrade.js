const { ethers, upgrades } = require("hardhat");

async function main() {
    // Previously deployed proxy contract using the deploy-proxy.js script, insert your own contract here.
    const proxyAddress = '0x07F74B2D1A0b57b40b91EAcdEE6A82E85F96A1a1';
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
}
   
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});