import cors from "cors";
import express from "express";

import { CharactersRouter } from "./routes/characters";
import { PlanetsRouter } from "./routes/planets";
import { SpeciesRouter } from "./routes/species";

const app = express();

app.use(cors());

app.use("/species", SpeciesRouter);
app.use("/characters", CharactersRouter);
app.use("/planets", PlanetsRouter);

const port = 3002;

app.listen({ port }, () => {
  console.log(`🚀  Rest API Server ready at http://localhost:${port}`);
});
