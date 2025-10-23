const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy("AkpovonaToken", "AKP");
  await token.deployed();
  console.log("MyToken deployed to:", token.address);
}

main().catch((e)=>{console.error(e); process.exit(1);});
