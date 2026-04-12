import express from 'express';
import MockResult from '../models/MockResult.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', protect, async (req, res) => {
  try {
    const { subject, topic, mockTitle, score, totalQuestions, percentage, answers } = req.body;

    if (
      !subject ||
      !topic ||
      !mockTitle ||
      score === undefined ||
      !totalQuestions ||
      percentage === undefined
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await MockResult.create({
      userId: req.user.userId,
      subject,
      topic,
      mockTitle,
      score,
      totalQuestions,
      percentage,
      answers: answers || []
    });

    res.status(201).json({
      message: 'Mock result saved successfully',
      result
    });
  } catch (error) {
    console.error('Submit mock error:', error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/my-results', protect, async (req, res) => {
  try {
    const results = await MockResult.find({ userId: req.user.userId })
      .sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    console.error('Get results error:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;