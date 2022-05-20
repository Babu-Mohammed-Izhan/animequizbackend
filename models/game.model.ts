import { Games, question } from '../types';
import { Schema, model } from 'mongoose';

const QuestionsSchema = new Schema<question>({
  q: String,
  op1: String,
  op2: String,
  op3: String,
  op4: String,
  ans: String,
});

const GameSchema = new Schema<Games>({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  questions: {
    type: [QuestionsSchema],
    required: true,
  },
});

const GameModel = model<Games>('Game', GameSchema);

export default GameModel;
