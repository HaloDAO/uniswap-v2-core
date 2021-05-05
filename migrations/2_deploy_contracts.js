const UniswapV2Factory = artifacts.require("UniswapV2Factory.sol");
const TokenGold = artifacts.require("TokenGold.sol");
const TokenSilver = artifacts.require("TokenSilver.sol");
const TokenBronze = artifacts.require("TokenBronze.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(UniswapV2Factory, addresses[0]);

  await deployer.deploy(TokenGold);
  await deployer.deploy(TokenSilver);
  await deployer.deploy(TokenBronze);

  // let token1Address, token2Address;

  // if (network === 'mainnet') {
  //   token1Address = '';
  //   token2Address = '';
  // } else {
  //   await deployer.deploy(Token1);
  //   await deployer.deploy(Token2);

  //   const token1 = await Token1.deployed();
  //   const token2 = await Token2.deployed();

  //   token1Address = token1.address;
  //   token2Address = token2.address;
  // }

  // await factory.createPair(token1Address, token2Address);
};