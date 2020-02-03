import cors from "cors";
import express from "express";

import { helloWorldData } from "../data";

const app = express();

app.use(cors());
app.get("/helloWorld", (_req, res) => {
  res.send(helloWorldData);
});

const port = 3002;

app.listen({ port }, () => {
  console.log(`🚀  Rest API Server ready at http://localhost:${port}`);
});
