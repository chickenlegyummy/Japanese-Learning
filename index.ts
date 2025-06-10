import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});