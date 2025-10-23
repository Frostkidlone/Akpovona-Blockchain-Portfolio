const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  // Replace name, symbol, baseURI as needed
  const nft = await MyNFT.deploy("AkpovonaNFT", "AKNFT", "https://ipfs.io/ipfs/your_base_uri/");
  await nft.deployed();
  console.log("MyNFT deployed to:", nft.address);

  // Optionally mint to deployer
  // const tx = await nft.mint((await hre.ethers.getSigners())[0].address);
  // await tx.wait();
}

main().catch((e)=>{console.error(e); process.exit(1);});
