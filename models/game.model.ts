import { Games } from '../types';
import { Schema, model } from 'mongoose';

const GameSchema = new Schema<Games>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const GameModel = model<Games>('Game', GameSchema);

export default GameModel;
