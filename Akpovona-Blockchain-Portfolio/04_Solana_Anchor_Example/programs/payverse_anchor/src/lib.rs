use anchor_lang::prelude::*;

declare_id!("ExAmplE111111111111111111111111111111111111");

#[program]
pub mod payverse_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let acc = &mut ctx.accounts.data;
        acc.owner = *ctx.accounts.authority.key;
        acc.balance = 0;
        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        let acc = &mut ctx.accounts.data;
        acc.balance = acc.balance.checked_add(amount).ok_or(ErrorCode::Overflow)?;
        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let acc = &mut ctx.accounts.data;
        acc.balance = acc.balance.checked_sub(amount).ok_or(ErrorCode::Underflow)?;
        Ok(())
    }
}

#[account]
pub struct DataAccount {
    pub owner: Pubkey,
    pub balance: u64,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 8)]
    pub data: Account<'info, DataAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut)]
    pub data: Account<'info, DataAccount>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut)]
    pub data: Account<'info, DataAccount>,
    pub authority: Signer<'info>,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Arithmetic overflow")]
    Overflow,
    #[msg("Arithmetic underflow")]
    Underflow,
}
