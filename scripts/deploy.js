async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory('UniswapV2Factory');
    const FactoryContract = await Factory.deploy(deployer.address);
    const factory = await FactoryContract.deployed();

    console.log('Factory Address: ', factory.address);
    console.log('INIT_CODE_PAIR_HASH: ', await factory.INIT_CODE_PAIR_HASH());
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});