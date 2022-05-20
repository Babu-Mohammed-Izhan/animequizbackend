/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from 'express';
import gameService from '../service/gameService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).send(gameService.getGames());
});

router.get('/:question', (req: Request, res: Response) => {
  const question = req.params.question;

  res.status(200).send(gameService.getOneGame(question));
});

router.post('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    to: req.body.to,
    from: req.body.from,
    questions: req.body.questions,
  };

  const newGame = gameService.addOneGame(Game);

  res.status(200).send(newGame);
});

router.delete('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    to: req.body.to,
    from: req.body.from,
    questions: req.body.questions,
  };

  res.status(200).send(gameService.deleteGame(Game));
});

router.patch('/', (req: Request, res: Response) => {
  const Game = {
    title: req.body.title,
    to: req.body.to,
    from: req.body.from,
    questions: req.body.questions,
  };

  const newGame = gameService.updateGame(Game);

  res.status(200).send(newGame);
});

export default router;
