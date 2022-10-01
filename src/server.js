require("dotenv").config();
const cors = require("cors");

const express = require("express");

const router = require("./routes/index.route");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello 500 ae!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

sequelize.sync({ alter: true, force: true });
