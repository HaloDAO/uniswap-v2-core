const UniswapV2Factory = artifacts.require("UniswapV2Factory.sol");
const TokenGold = artifacts.require("TokenGold.sol");
const TokenSilver = artifacts.require("TokenSilver.sol");
const TokenBronze = artifacts.require("TokenBronze.sol");
const IERC20 = artifacts.require("IERC20");

const { pow } = require("../test/util");
const { BigNumber } = require("../test/bignumber.min");

module.exports = async function (deployer, network, addresses) {
  const TOKEN_GOLD_AMOUNT = pow(500, 18);
  const TOKEN_SILVER_AMOUNT = pow(400, 18);
  const TOKEN_BRONZE_AMOUNT = pow(300, 18);

  await deployer.deploy(UniswapV2Factory, addresses[0]);
  const factory = await UniswapV2Factory.deployed();

  // TOKEN GOLD
  await deployer.deploy(TokenGold);
  const tokenGold = await TokenGold.deployed();
  await web3.eth.sendTransaction({from: addresses[0], to: tokenGold.address, value: 1000000000000000000});
  const tokenGoldBal = await web3.eth.getBalance(tokenGold.address);
  console.log('TokenGold Balance: ', tokenGoldBal);

  let _tokenGold = await IERC20.at(tokenGold.address);
  await _tokenGold.approve(factory.address, TOKEN_GOLD_AMOUNT);

  // TOKEN SILVER
  await deployer.deploy(TokenSilver);
  const tokenSilver = await TokenSilver.deployed();
  await web3.eth.sendTransaction({from: addresses[0], to: tokenSilver.address, value: 2000000000000000000});
  const tokenSilverBal = await web3.eth.getBalance(tokenSilver.address);
  console.log('TokenSilver Balance: ', tokenSilverBal);

  let _tokenSilver = await IERC20.at(tokenSilver.address);
  await _tokenSilver.approve(factory.address, TOKEN_SILVER_AMOUNT);

  // TOKEN BRONZE
  await deployer.deploy(TokenBronze);
  const tokenBronze = await TokenBronze.deployed();
  await web3.eth.sendTransaction({from: addresses[0], to: tokenBronze.address, value: 3000000000000000000});
  const tokenBronzeBal = await web3.eth.getBalance(tokenBronze.address);
  console.log('TokenBronze Balance: ', tokenBronzeBal);

  let _tokenBronze = await IERC20.at(tokenBronze.address);
  await _tokenBronze.approve(factory.address, TOKEN_BRONZE_AMOUNT);




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