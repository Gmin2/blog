---
title: "ink!CTF"
date: '2026.02.03'
excerpt: "A Capture-The-Flag platform for ink! smart contract security. Break real contracts. Learn why they broke."
---

# ink!CTF

![ink!CTF Hero](/images/inkctf-hero.png)

There is no shortage of articles explaining smart contract vulnerabilities. Reentrancy. Access control. Storage visibility. You can read about all of them. Understand them conceptually. Nod along.

And then deploy a contract with the exact same mistake.

Reading about vulnerabilities does not build intuition. Exploiting them does.

## Why This Exists

Ethereum has [ethernaut](https://ethernaut.openzeppelin.com/). A series of increasingly difficult smart contracts that you must hack to progress. Each level isolates a specific vulnerability class. You learn not by reading about reentrancy, but by draining a contract yourself.

The Polkadot ecosystem has nothing like this for ink! contracts. And ink! is different enough from Solidity that the security model diverges in meaningful ways. The storage layout is different. The execution model is different. Cross-contract calls work differently. You cannot simply port Ethernaut's lessons and call it done.

So we built [ink!CTF](https://ctfs.ink) — a Capture-The-Flag platform for ink! smart contract security on Paseo Asset Hub testnet. You connect a wallet. You get a personal contract instance. You study the source code. You open your browser console. And you break it.

## The Levels

Six levels, each isolating a vulnerability class that has cost real money on real networks.

**Instance** — The developer left a public getter on a contract that authenticates with a password. You call it, read the password, authenticate. It sounds trivial. It is trivial. That is why it keeps happening in production.

**Fallback** — The intended path to ownership requires a thousand transactions. But the fallback function has a shortcut that the developer did not intend to be an entry point. Every code path to a privileged operation is an attack surface.

**Re-entrancy** — The classic. A donation contract that transfers funds before updating balances. In Solidity, this is the DAO hack. In ink!, the pattern is the same but the mechanics differ. You learn Checks-Effects-Interactions not as a mantra but as something you need to get right to drain the contract.

**Coin Flip** — A "random" coin flip that uses the block number as its entropy source. Block numbers are sequential and public. Win 10 in a row to complete the level. There is no randomness on a deterministic blockchain without external oracles.

**King** — A throne game where the previous king gets paid when someone sends more value. Deploy a contract that rejects all transfers, become king, and nobody can dethrone you because paying you always fails. Never assume external calls succeed.

**Vault** — A contract with a "hidden" password and no getter function. The developer believes omitting a getter makes the data private. It does not. All blockchain storage is publicly readable. The `private` keyword controls code-level visibility, not data-level privacy.

## How You Play

![Console Gameplay](/images/inkctf-console.png)

Connect a Polkadot wallet. Get some PAS from the testnet faucet. Pick a level.

Each level gives you the full contract source code and deploys a personal instance just for you. The browser console is your weapon — the platform injects helper functions so you can call contract methods, send transactions, and inspect state directly from devtools.

When you think you have exploited the contract, submit your instance. The validation is on-chain. Either you broke the contract or you did not. No self-reported completions.

## Why This Matters

The Polkadot ecosystem is growing. ink! contracts are being deployed to production parachains. DeFi protocols, governance systems, and identity solutions are being built with ink!.

Every vulnerability in ink!CTF has a real-world analog. The DAO hack. The Parity wallet freeze. The King of the Ether lockout. These are not theoretical risks.

We would rather you learn this by draining a testnet contract than by losing funds on mainnet.

---

> [ink!CTF](https://ctfs.ink) is live on Paseo Asset Hub testnet. Connect a wallet, get some PAS from the faucet, and start breaking things.
