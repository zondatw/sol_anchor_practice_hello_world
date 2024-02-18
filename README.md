# Hello world for solana anchor

## Test quick start

```shell
$ anchor test
warning: some crates are on edition 2021 which defaults to `resolver = "2"`, but virtual workspaces default to `resolver = "1"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
   Compiling hello_world v0.1.0 (/home/zonda/repos/sol_practice/hello_world/programs/hello_world)
warning: unused variable: `ctx`
 --> programs/hello_world/src/lib.rs:9:23
  |
9 |     pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
  |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `hello_world` (lib) generated 1 warning (run `cargo fix --lib -p hello_world` to apply 1 suggestion)
    Finished release [optimized] target(s) in 1.37s

Found a 'test' script in the Anchor.toml. Running it as a test suite!

Running test suite: "/home/zonda/repos/sol_practice/hello_world/Anchor.toml"

yarn run v1.22.21
warning package.json: No license field
$ /home/zonda/repos/sol_practice/hello_world/node_modules/.bin/ts-mocha -p ./tsconfig.json -t 1000000 'tests/**/*.ts'


  hello_world
Your transaction signature 4ad8151GyGdYF2iye7cVi3D73RBAu3YywrasvDpqH5UDRbsvoR342hwceBfp2kLub9ALLEMrdF6NdpAL8FznCJ35
    ✔ Is initialized! (155ms)


  1 passing (163ms)

Done in 1.90s.
```

## Troubleshooting

### Error: Unable to read keypair file

when execute following cmd, and it's say `Error: Unable to read keypair file`.

```shell
$ anchor test
warning: some crates are on edition 2021 which defaults to `resolver = "2"`, but virtual workspaces default to `resolver = "1"`
note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
   Compiling hello_world v0.1.0 (/home/zonda/repos/sol_practice/hello_world/programs/hello_world)
    Finished release [optimized] target(s) in 1.52s

Found a 'test' script in the Anchor.toml. Running it as a test suite!

Running test suite: "/home/zonda/repos/sol_practice/hello_world/Anchor.toml"

Error: Unable to read keypair file
```

please, check `~/.config/solana/id.json` exist, if not, execute `solana-keygen new` to generate new keypair.

```shell
$ solana-keygen new
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none):

Wrote new keypair to /home/zonda/.config/solana/id.json
================================================================================
pubkey: FTxxxxxxxxxxxxxxxxxxxxxxxxxxJv
================================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
trend good dignity custom rubber tonight monitor pelican pigeon ugly shell quote
================================================================================
```