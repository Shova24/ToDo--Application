import express from "express";
const cors = require("cors");
import router from "./routers/Router";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);
app.get("/", (req, res) => {
  try {
    res.status(200).json("Found");
  } catch (err) {}
  res.status(404).send("Not Found");
});

export default app;
