import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import appRouter from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ 
  origin: "*" 
  })
);

app.use(bodyParser.json());

app.use("/api", appRouter);
app.use('/images', express.static('images'));

app.listen(PORT, () =>
  console.log(`
🚀 Server running at: http://localhost:${PORT}`)
);

