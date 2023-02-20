import bodyParser from "body-parser";
import express from "express";

import appRouter from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/api", appRouter);

app.listen(PORT, () =>
  console.log(`
🚀 Server running at: http://localhost:${PORT}`)
);

