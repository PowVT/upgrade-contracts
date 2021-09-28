# Upgradable Contracts Hardhat Project

Whenever you deploy a new contract using ```bash deployProxy ``` in the OpenZeppelin Upgrades Plugins, that contract instance can be upgraded later. By default, only the address that originally deployed the contract have the rights to upgrade it.

### Definitions

Proxy Contract: A contract which the user interacts with. This contract stores the 'state' (balances, local variables not inside functions, etc...).

Implementation Contract: This contract houses all the actual code that is executed via a delegate call from the proxy contract. 

### Upgrade Pattern

In a upgradable scenario, you have a proxy contract that is deployed and only updated if a new implementation contract is deployed. This contract never actually changes it is just 'upgraded' since it is now pointing at a new implementation contract. 

User ---- tx ---> Proxy ----------> Implementation_v0
                     |
                      ------------> Implementation_v1
                     |
                      ------------> Implementation_v2

This pattern is done by using the EVM delegateCall opcode. This means the callers tx is executed with the implementation contracts logic, but the byte code is sent back to the proxy contract via the delegate call mechanism. Here the proxy contract represents the pair's 'state'. Hence being upgradable in the sense that the implementation contract can be changed out if there is a bug or design change that requires updating. 

### Shell Commands
Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/create-box.js
node scripts/deploy.js
npx hardhat generate
npx hardhat account
```
### Getting Started/ Install
```shell
git clone 
cd 
yarn install
```

