async function main() {
    // Get signer
    const [deployer] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory('UniswapV2Factory');
    const FactoryContract = await Factory.deploy(deployer.address);
    const factory = await FactoryContract.deployed();

    let token1Address, token2Address;

    const Token1 = await ethers.getContractFactory('Token1');
    const Token1Contract = await Token1.deploy();
    const token1 = await Token1Contract.deployed();

    const Token2 = await ethers.getContractFactory('Token2');
    const Token2Contract = await Token2.deploy();
    const token2 = await Token2Contract.deployed();

    token1Address = token1.address;
    token2Address = token2.address;

    await factory.createPair(token1Address, token2Address);
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});