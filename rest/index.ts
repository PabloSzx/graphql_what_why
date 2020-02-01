import express from "express";
import notifier from "node-notifier";
import requireEnv from "require-env-variable";

import { IndexRoutes } from "./routes";

const app = express();

app.use(IndexRoutes);

const port = parseInt(requireEnv("PORT").PORT, 10);

app.listen({ port }, () => {
  notifier.notify({
    title: "🚀  Rest API Server ready",
    message: `at http://localhost:${port}`,
  });
  console.log(`🚀  Rest API Server ready at http://localhost:${port}`);
});
