import fetch from 'node-fetch';

export async function getWalletBalances(walletAddress) {
  const url = `https://api.sim.dune.com/v1/evm/balances/${walletAddress}?metadata=url,logo&exclude_spam_tokens=true`;

  const response = await fetch(url, {
    headers: {
      'X-Sim-Api-Key': process.env.SIM_API_KEY,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) throw new Error('Failed to fetch DUNE API');

  const data = await response.json();
  return data.balances || [];
}