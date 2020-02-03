import cors from "cors";
import express from "express";
import next from "next";

const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
});

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const serverApp = express();

  serverApp.use(cors());

  serverApp.use((req: any, res: any) => {
    handle(req, res);
  });

  const port = parseInt(process.env.PORT || "3000", 10);

  serverApp.listen({ port }, () => {
    console.log(`🚀  Next.js Server ready at http://localhost:${port}`);
  });
});
