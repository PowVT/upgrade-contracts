const { upgrades } = require("hardhat");

async function main() {
    const gnosisSafe = '0x8919B47698ec536B8f8BFE2F3C60f30b75ec296b';
   
    console.log("Transferring ownership of ProxyAdmin...");
    // Only the owner of the ProxyAdmin can upgrade Gnosis safe contracts
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}
   
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});