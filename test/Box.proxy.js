const { expect } = require('chai');
 
let Box;
let box;
 
// Start test block
describe('Box (proxy)', function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    proxy = await upgrades.deployProxy(Box, [52], {initializer: 'store'});
  });
  // Test case
  it('Retrieve function returns value previously initialized in proxy.', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await proxy.retrieve()).toString()).to.equal('52');
  });
});