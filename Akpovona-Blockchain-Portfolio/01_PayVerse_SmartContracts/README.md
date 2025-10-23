# PayVerse Smart Contracts

This directory contains the PayVerse escrow and payment manager example contracts (Solidity).

Files:
- PayVerseEscrow.sol - simple escrow contract with arbiter-controlled release/refund
- PaymentManager.sol - factory that deploys PayVerseEscrow contracts and tracks them

Quickstart:
1. Install dependencies:
   - `npm init -y`
   - `npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers`
2. Copy `.env.example` to `.env` and fill RPC keys and PRIVATE_KEY.
3. Run `npx hardhat compile` to compile contracts.
4. Use `scripts/deploy.js` to deploy to Sepolia/Mumbai/BSC testnet (modify network in hardhat.config.js).
