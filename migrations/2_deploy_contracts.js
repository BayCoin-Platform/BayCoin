const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const BayCoin = artifacts.require('BayCoin');

module.exports = async function (deployer) {
  const instance = await deployProxy(BayCoin, [], { deployer, initializer: 'initialize' });
  console.log('Deployed', instance.address);
}