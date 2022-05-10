/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from 'express';
import gameService from '../service/gameService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).send(gameService.getGames());
});

router.get('/:title', (req: Request, res: Response) => {
  const title = req.params.title;

  res.status(200).send(gameService.getOneGame(title));
});

router.post('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  const newGame = gameService.addOneGame(Game);

  res.status(200).send(newGame);
});

router.delete('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  res.status(200).send(gameService.deleteGame(Game));
});

router.patch('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  const newGame = gameService.updateGame(Game);

  res.status(200).send(newGame);
});

export default router;
