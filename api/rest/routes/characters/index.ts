import { Router } from "express";
import { sample } from "lodash";

import { CharactersData } from "../../../data";

export const CharactersRouter = Router();

CharactersRouter.get("/hero", (_req, res) => {
  return res.send(sample(CharactersData));
});

CharactersRouter.get("/characterData", (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400).send("Invalid name");
  }

  res.send(CharactersData.find(value => value.name === name));
});
