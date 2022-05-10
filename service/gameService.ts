/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Games } from '../types';
import GameModel from '../models/game.model';

const getGames = async (): Promise<Games[]> => {
  const Games = await GameModel.find({});
  return Games;
};

const getOneGame = async (title: string): Promise<Games> => {
  const Game = await GameModel.findOne({ title: title });
  if (!Game) {
    throw Error('Game in not available');
  }
  return Game;
};

const addOneGame = async (game: Games): Promise<Games> => {
  const newGame = await GameModel.create(game);

  if (!newGame) {
    throw Error('Game in not available');
  }

  return newGame;
};

const updateGame = async (game: Games): Promise<Games> => {
  const updatedGame = await GameModel.findOneAndUpdate(
    { title: game.title },
    Game
  );

  if (!updatedGame) {
    throw Error('Game in not available');
  }

  return updatedGame;
};

const deleteGame = async (game: Games): Promise<Games> => {
  const deletedGame = await GameModel.findOneAndDelete({ title: game.title });

  if (!deletedGame) {
    throw Error('Game in not available');
  }

  return deletedGame;
};

export default {
  getGames,
  getOneGame,
  addOneGame,
  updateGame,
  deleteGame,
};
