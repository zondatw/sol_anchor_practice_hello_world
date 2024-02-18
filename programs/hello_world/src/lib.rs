use anchor_lang::prelude::*;

declare_id!("DfAxVwzZccekFR6LZJWSb2t46wUGwGKheh39v3cYv3yZ");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
