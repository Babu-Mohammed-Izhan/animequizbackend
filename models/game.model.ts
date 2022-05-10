import { Games } from '../types';
import { Schema, model } from 'mongoose';

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
    type: {
      q: String,
      op1: String,
      op2: String,
      op3: String,
      op4: String,
      ans: String,
    },
    required: true,
  },
});

const GameModel = model<Games>('Game', GameSchema);

export default GameModel;
