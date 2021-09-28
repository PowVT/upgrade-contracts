# Upgradable Contracts Hardhat Project (ERC1967)

Whenever you deploy a new contract using ```deployProxy``` in the OpenZeppelin Upgrades Plugins, that contract instance can be upgraded later. By default, only the address that originally deployed the contract have the rights to upgrade it.

### Definitions

Proxy Contract: A contract which the user interacts with. This contract stores the 'state' (balances, local variables not inside functions, etc...).

Implementation Contract: This contract houses all the actual code that is executed via a delegate call from the proxy contract. 

### Upgrade Pattern

In a upgradable scenario, you have a proxy contract that is deployed and only updated if a new implementation contract is deployed. This contract never actually changes it is just 'upgraded' since it is now pointing at a new implementation contract. 

User ---- tx ---> Proxy ----------> Implementation_v0 // _v1 // _v2 // etc.

This pattern is done by using the EVM delegateCall opcode. This means the callers tx is executed with the implementation contracts logic, but the byte code is sent back to the proxy contract via the delegate call mechanism. Here the proxy contract represents the pair's 'state'. Hence being upgradable in the sense that the implementation contract can be changed out if there is a bug or design change that requires updating. 

### Getting Started/ Install
```shell
git clone https://github.com/PowVT/upgrade-contracts.git upgrade-contracts
cd upgrade-contracts 
yarn install
```

## General Outline of this Project:
1. Deploy the Box.sol contract as normal with the deploy.js script. (Optional: Change a variable from the command line)
2. Deploy proxy Box.sol contract using the ```upgrades.deployProxy``` in the deploy-proxy.js script. (Optional: Verify that the changes made to the Box contract are still valid state in the proxy contract)
3. Transfer ownership of the Box.sol contract to a Gnosis Safe. Using a Gnosis safe is very handy when upgrading contracts since they have a built in OpenZeppelin app library.
4. Later in time, the contract may need to be updated to V2...
5. Now we use the prepare-upgrade.js script to call the ```upgrades.prepareUpgrade``` method. This will check that the proxy contract is a valid ERC1967 contract.
6. Now we can go into our Gnosis safe and upgrade the contract. Here you need to enter both the proxy contract address and the new implementation contract (V2). Once the transaction goes through, the upgrade will be sucessfull.

### Shell Commands
Try running some of the following tasks:
(Remember to run all test scripts in localhost)

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat console --network localhost
node scripts/create-box.js
node scripts/deploy.js
npx hardhat generate
npx hardhat account
```

Useful Hardhat console commands:
```shell
const Box = await ethers.getContractFactory("Box")
const box = await Box.attach("paste-contract-address-here")
(await box.retrieve()).toString()
await box.store(5)
```