import express from 'express';
import { getWalletBalances } from '../utils/dune.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const walletAddress = req.user.walletAddress || '0x000...';
  try {
    const balances = await getWalletBalances(walletAddress);
    res.json(balances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch balances' });
  }
});

export default router;