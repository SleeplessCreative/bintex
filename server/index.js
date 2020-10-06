const express = require("express");
const cors = require("cors");

const invoiceRoutes = require("./routes/invoice");
const authRoutes = require("./routes/authentication");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(cors());

// Routes middleware
app.get("/", (req, res, next) => {
  res.status(200).json("Welcome to the server side of Bintex!");
});

app.use("/api/auth", authRoutes);

app.use("/api/invoice", invoiceRoutes);

// Errors middleware
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
