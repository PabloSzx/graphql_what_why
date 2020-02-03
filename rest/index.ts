import express from "express";

import { helloWorldData } from "../data";

const app = express();

app.get("/helloWorld", (_req, res) => {
  res.send(helloWorldData);
});

const port = parseInt(process.env.PORT || "3000", 10);

app.listen({ port }, () => {
  console.log(`🚀  Rest API Server ready at http://localhost:${port}`);
});
