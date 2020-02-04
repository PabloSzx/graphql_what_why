import { Router } from "express";

import { SpeciesData } from "../../../data";

export const SpeciesRouter = Router();

SpeciesRouter.get("/speciesData", (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400).send("Invalid name");
  }

  res.send(SpeciesData.find(value => value.name === name));
});
