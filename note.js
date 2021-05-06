
nowInSeconds = Math.floor(Date.now() / 1000)
expiryDate = nowInSeconds + 900;

await web3.eth.sendTransaction({from: accounts[0], to: TokenGold.address, value: 1000000000000000000});

balance = await web3.eth.getBalance(instance.address);

factory = await UniswapV2Factory.deployed()

router = await UniswapV2Router02.deployed()
blockNum = await web3.eth.getBlockNumber()
block = await web3.eth.getBlock(blockNum)
router.addLiquidity('0x8B7857C6475d73250AB424df493d40b38765d264','0xb2e80aacAbb882208Aa78ACc88CC790e05ecbD14', 10, 15, 1, 1, '0xE88718B6abA54ccEf965a5D6289bB1D829c9bF70', block['timestamp'])


FACTORY_ADDRESS = 0xBB62AFFB8749c78d0D189eF91d5CC77eb8DF13AE
TokenGold = 0x8B7857C6475d73250AB424df493d40b38765d264
TokenSilver = 0xb2e80aacAbb882208Aa78ACc88CC790e05ecbD14
TokenBronze = 0x7122c31009A6755ce5E5B3Ad84aA21c5fcE1A634

Exchange 1
gold/silver
0x8B7857C6475d73250AB424df493d40b38765d264
0xb2e80aacAbb882208Aa78ACc88CC790e05ecbD14