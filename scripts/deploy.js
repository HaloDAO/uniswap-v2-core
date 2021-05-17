const hre = require('hardhat')

async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory('UniswapV2Factory');
    const FactoryContract = await Factory.deploy(deployer.address);
    const factory = await FactoryContract.deployed();

    console.log('Factory Address: ', factory.address);
    console.log('INIT_CODE_PAIR_HASH: ', await factory.INIT_CODE_PAIR_HASH());

    console.log('Verifying Factory Contract');
    await hre.run('verify:verify', {
      address: factory.address,
      constructorArguments: [
        deployer.address
      ]
    })
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});