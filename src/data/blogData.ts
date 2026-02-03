// This file is auto-generated from markdown files in docs/
// Do not edit manually - run 'pnpm run process-blog' to regenerate

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    "id": "introducing-inkctf",
    "title": "ink!CTF",
    "excerpt": "A Capture-The-Flag platform for ink! smart contract security. Break real contracts. Learn why they broke.",
    "content": "# ink!CTF\n\n![ink!CTF Hero](/images/inkctf-hero.png)\n\nThere is no shortage of articles explaining smart contract vulnerabilities. Reentrancy. Access control. Storage visibility. You can read about all of them. Understand them conceptually. Nod along.\n\nAnd then deploy a contract with the exact same mistake.\n\n> Reading about vulnerabilities does not build intuition. Exploiting them does.\n\n## Why This Exists\n\nEthereum has [ethernaut](https://ethernaut.openzeppelin.com/). A series of increasingly difficult smart contracts that you must hack to progress. Each level isolates a specific vulnerability class. You learn not by reading about reentrancy, but by draining a contract yourself.\n\nThe Polkadot ecosystem has nothing like this for ink! contracts. And ink! is different enough from Solidity that the security model diverges in meaningful ways. The storage layout is different. The execution model is different. Cross-contract calls work differently. You cannot simply port Ethernaut's lessons and call it done.\n\nSo we built [ink!CTF](https://ctfs.ink) — a Capture-The-Flag platform for ink! smart contract security on Paseo PassetHub testnet. You connect a wallet. You get a personal contract instance. You study the source code. You open your browser console. And you break it.\n\n## The Levels\n\nSix levels, each isolating a vulnerability class that has cost real money on real networks.\n\n**Instance** — The developer left a public getter on a contract that authenticates with a password. You call it, read the password, authenticate. It sounds trivial. It is trivial. That is why it keeps happening in production.\n\n**Fallback** — The intended path to ownership requires a thousand transactions. But the fallback function has a shortcut that the developer did not intend to be an entry point. Every code path to a privileged operation is an attack surface.\n\n**Re-entrancy** — The classic. A donation contract that transfers funds before updating balances. In Solidity, this is the DAO hack. In ink!, the pattern is the same but the mechanics differ. You learn Checks-Effects-Interactions not as a mantra but as something you need to get right to drain the contract.\n\n**Coin Flip** — A \"random\" coin flip that uses the block number as its entropy source. Block numbers are sequential and public. Win 10 in a row to complete the level. There is no randomness on a deterministic blockchain without external oracles.\n\n**King** — A throne game where the previous king gets paid when someone sends more value. Deploy a contract that rejects all transfers, become king, and nobody can dethrone you because paying you always fails. Never assume external calls succeed.\n\n**Vault** — A contract with a \"hidden\" password and no getter function. The developer believes omitting a getter makes the data private. It does not. All blockchain storage is publicly readable. The `private` keyword controls code-level visibility, not data-level privacy.\n\n## How You Play\n\n![alt text](/images/inkctf-game.png)\n\nConnect a Polkadot wallet. Get some PAS from the testnet faucet. Pick a level.\n\nEach level gives you the full contract source code and deploys a personal instance just for you. The browser console is your weapon — the platform injects helper functions so you can call contract methods, send transactions, and inspect state directly from devtools.\n\n![Console Gameplay](/images/inkctf-console.png)\n\nWhen you think you have exploited the contract, submit your instance. The validation is on-chain. Either you broke the contract or you did not. No self-reported completions.\n\n## Why This Matters\n\nThe Polkadot ecosystem is growing. ink! contracts are being deployed to production parachains. DeFi protocols, governance systems, and identity solutions are being built with ink!.\n\nEvery vulnerability in ink!CTF has a real-world analog. The DAO hack. The Parity wallet freeze. The King of the Ether lockout. These are not theoretical risks.\n\nWe would rather you learn this by draining a testnet contract than by losing funds on mainnet.\n\n---\n\n> [ink!CTF](https://ctfs.ink) is live on Paseo PassetHub testnet. Connect a wallet, get some PAS from the faucet, and start breaking things.",
    "date": "2026.02.03",
    "author": "Anonymous",
    "readTime": "5 min read",
    "category": "Uncategorized",
    "tags": []
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
