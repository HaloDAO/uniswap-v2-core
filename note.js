
nowInSeconds = Math.floor(Date.now() / 1000)
expiryDate = nowInSeconds + 900;

await web3.eth.sendTransaction({from: accounts[0], to: TokenGold.address, value: 1000000000000000000});

balance = await web3.eth.getBalance(instance.address);


router = await UniswapV2Router02.deployed()
blockNum = await web3.eth.getBlockNumber()
block = await web3.eth.getBlock(blockNum)
router.addLiquidity('0x781e6D3b790c69c5eF6e8099142B8ff230B682fC','0x0e1b770Eb0B04dDE02019fe0f3042424fAB8fa88', 10, 15, 1, 1, '0x8898f3dD2E04748c98F16520799df62E9386b2B8', block['timestamp'])


FACTORY_ADDRESS = 0xff6C84C4FaBd1AC06C9E131646a11542150E1A4E
TokenGold = 0x781e6D3b790c69c5eF6e8099142B8ff230B682fC
TokenSilver = 0x48586DAD3200aC785BC9Bf641CEd9c9E0a670f53
TokenBronze = 0x84Ab8c7CFa6C6420b3F26De446708E73732b5bdB

Exchange 1
gold/silver
0x781e6D3b790c69c5eF6e8099142B8ff230B682fC
0x48586DAD3200aC785BC9Bf641CEd9c9E0a670f53