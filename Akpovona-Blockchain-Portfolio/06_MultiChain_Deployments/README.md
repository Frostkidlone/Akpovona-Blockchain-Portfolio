# Multi-Chain Deployment Notes

This document explains how to deploy the same Solidity contracts using Hardhat to multiple EVM-compatible testnets.

Networks shown:
- Ethereum Sepolia
- Polygon Mumbai
- BSC Testnet
- Avalanche Fuji
- Fantom Testnet

Steps:
1. Fill `.env` RPC endpoints and private key.
2. Use the same `hardhat.config.js` with multiple network keys (see example in PayVerse folder).
3. Run `npx hardhat run scripts/deploy.js --network <network>` to deploy.
