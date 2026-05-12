import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  }),
);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/user", userRoutes);

export default app;
