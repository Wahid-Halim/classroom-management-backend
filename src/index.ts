import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from classroom-backend" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
