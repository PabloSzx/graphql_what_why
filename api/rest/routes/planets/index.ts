import { Router } from "express";

import { PlanetsData } from "../../../data";

export const PlanetsRouter = Router();

PlanetsRouter.get("/planetData", (req, res) => {
  const { name } = req.query;
  if (name === undefined) {
    return res.status(400).send("Invalid name");
  }

  return res.send(PlanetsData.find(value => value.name === name));
});

PlanetsRouter.get("/planetsList", (req, res) => {
  const { planets } = req.query;

  const planetsList: string[] = planets?.split(",") ?? [];

  return res.send(PlanetsData.filter(({ name }) => planetsList.includes(name)));
});
