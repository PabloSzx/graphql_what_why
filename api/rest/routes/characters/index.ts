import { Router } from "express";
import { sample } from "lodash";

import { CharactersData } from "../../../data";

export const CharactersRouter = Router();

CharactersRouter.get("/hero", (_req, res) => {
  return res.send(sample(CharactersData));
});

CharactersRouter.get("/friends", (req, res) => {
  const { friends } = req.query;

  const friendsList: string[] = friends?.split(",") ?? [];

  res.send(CharactersData.filter(({ name }) => friendsList.includes(name)));
});

CharactersRouter.get("/characterData", (req, res) => {
  const { name } = req.query;
  if (name === undefined) {
    return res.status(400).send("Invalid name");
  }

  res.send(CharactersData.find(value => value.name === name));
});
