import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema(
  {
    questionIndex: Number,
    selectedAnswer: Number,
    correctAnswer: Number,
    isCorrect: Boolean
  },
  { _id: false }
);

const mockResultSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    subject: {
      type: String,
      required: true,
      trim: true
    },
    topic: {
      type: String,
      required: true,
      trim: true
    },
    mockTitle: {
      type: String,
      required: true,
      trim: true
    },
    score: {
      type: Number,
      required: true
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    },
    answers: {
      type: [answerSchema],
      default: []
    }
  },
  { timestamps: true }
);

const MockResult = mongoose.model('MockResult', mockResultSchema);

export default MockResult;