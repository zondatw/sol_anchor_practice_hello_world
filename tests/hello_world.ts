import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
// import { HelloWorld } from "../target/types/hello_world";
import { HelloAnchor } from "../target/types/hello_anchor";

// describe("hello_world", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.HelloWorld as Program<HelloWorld>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });

const assert = require("assert");

describe('Test', () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);

  const pg = anchor.workspace.HelloAnchor as Program<HelloAnchor>;

  it('initialize', async () => {
    // Generate keypair for the new account
    const newAccountKp = anchor.web3.Keypair.generate();

    // Send transaction
    const data = new anchor.BN(42)
    const txHash = await pg.methods
      .initialize(data)
      .accounts({
        newAccount: newAccountKp.publicKey,
        signer: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([newAccountKp])
      .rpc()
    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`)


    // Confirm transaction
    await provider.connection.confirmTransaction(txHash)


    // Fetch the created account
    const newAccount = await pg.account.newAccount.fetch(
      newAccountKp.publicKey
    )


    console.log('On-chain data is:', newAccount.data.toString())


    // Check whether the data on-chain is equal to local 'data'
    assert(data.eq(newAccount.data))
  })
})