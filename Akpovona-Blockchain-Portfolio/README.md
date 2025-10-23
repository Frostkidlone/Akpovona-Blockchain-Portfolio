# Akpovona-Blockchain-Portfolio

**Owner:** Akpovona Abikure  
**Email:** abikurepatrick@gmail.com  
**Phone:** 09097254314  

This repository is a curated portfolio for blockchain development showcasing EVM smart contracts (Solidity), an ERC-20 and ERC-721 example, a PayVerse escrow/payment system, a minimal Solana Anchor example, Web3 front-end integration, multi-chain deploy configs, and security audit notes.

**Repo name suggestion:** `Akpovona-Blockchain-Portfolio`

---

## Sections
1. `01_PayVerse_SmartContracts/` - Escrow and payment manager (Solidity + Hardhat)
2. `02_NFT_Token_Example/` - ERC-721 example
3. `03_ERC20_Token_Example/` - ERC-20 example with mint/burn
4. `04_Solana_Anchor_Example/` - Minimal Anchor program (Rust)
5. `05_Web3_JS_Integration/` - Simple frontend connecting to contracts
6. `06_MultiChain_Deployments/` - Hardhat multi-network config and notes
7. `07_Security_Audit_Notes/` - Audit checklist and notes

---

## Example (placeholder) deployed addresses (for demo only)
> These addresses are **examples/placeholders** to show where you would include real deployed addresses.
- Ethereum (Sepolia) example: `0xAbC12345aBc12345aBc12345AbC12345aBc12345`
- Polygon (Mumbai) example: `0xDeF67890dEf67890dEf67890DeF67890dEf67890`
- BSC Testnet example: `0xFaB00000faB00000faB00000FaB00000faB00000`
- Solana (Devnet) example program id: `ExAmplE111111111111111111111111111111111111`

---

## How to use
- Each folder contains a README with steps to compile, test, and deploy locally using Hardhat or Anchor.
- Fill `.env` with your INFURA/Alchemy/RPC keys and private key for deployment scripts.
- Run `npm install` inside Solidity folders and use `npx hardhat run scripts/deploy.js --network <network>` to d
