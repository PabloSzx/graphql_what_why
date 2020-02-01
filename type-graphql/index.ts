import express from "express";
import notifier from "node-notifier";
import requireEnv from "require-env-variable";

import { apolloServer } from "./apollo";

const app = express();

apolloServer.applyMiddleware({
  app,
});

const port = parseInt(requireEnv("PORT").PORT, 10);

app.listen({ port }, () => {
  notifier.notify({
    title: "🚀  TypeGraphQL API Server ready",
    message: `at http://localhost:${port}`,
  });
  console.log(`🚀  TypeGraphQL API Server ready at http://localhost:${port}`);
});
