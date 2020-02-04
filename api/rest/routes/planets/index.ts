import { Router } from "express";

import { PlanetsData } from "../../../data";

export const PlanetsRouter = Router();

PlanetsRouter.get("/planetData", (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400).send("Invalid name");
  }

  return res.send(PlanetsData.find(value => value.name === name));
});
