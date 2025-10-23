const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const PaymentManager = await hre.ethers.getContractFactory("PaymentManager");
  const payment = await PaymentManager.deploy();
  await payment.deployed();
  console.log("PaymentManager deployed to:", payment.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
