import { Router } from "express";

export const IndexRoutes = Router();

IndexRoutes.get("/helloWorld", (_req, res) => {
  res.send({
    helloWorld: "Hello world",
  });
});
