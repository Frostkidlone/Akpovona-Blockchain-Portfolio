# Solana Anchor Example (minimal)

This directory contains a minimal Anchor program demonstrating initialize, deposit, and withdraw flow.
To test:
1. Install Anchor and Solana CLI (see Anchor docs).
2. Run `anchor build` then `anchor deploy --provider.cluster devnet` after setting the Anchor.toml and wallet.
3. The declared program id in lib.rs is a placeholder; replace it with your deployed program id after deployment.
