# Upgradable Contracts Hardhat Project

Whenever you deploy a new contract using deployProxy in the OpenZeppelin Upgrades Plugins, that contract instance can be upgraded later. By default, only the address that originally deployed the contract has the rights to upgrade it.

deployProxy will create the following transactions:

1. Deploy the implementation contract (our Box contract)

2. Deploy the ProxyAdmin contract (the admin for our proxy).

3. Deploy the proxy contract and run any initializer function.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/create-box.js
npx hardhat help
```
