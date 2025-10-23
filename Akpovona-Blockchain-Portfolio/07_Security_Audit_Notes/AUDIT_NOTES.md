# Smart Contract Security Notes

## Common vulnerabilities
- Reentrancy: Use checks-effects-interactions pattern and `ReentrancyGuard`.
- Integer overflow/underflow: Use Solidity ^0.8+ (has built-in checks) or SafeMath for older versions.
- Access control: Ensure `onlyOwner` or role-based access controls where necessary.
- Front-running: Consider using commit-reveal or off-chain signing for sensitive actions.
- Gas griefing: Optimize loops and avoid unbounded loops on user input.

## Manual audit checklist
- Compile with optimizations, check for warnings.
- Ensure proper visibility specifiers (public, external, private, internal).
- Check arithmetic operations and overflows.
- Test edge cases, including zero addresses, zero amounts, and reentrancy flows.
- Run static analysis tools (Slither, MythX) and fix reported issues.
