const fs = require("fs");
const path = require("path");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

const data = fs.readFileSync(
  path.join(__dirname, "data", "quotes.json"),
  "utf8"
);

// A very basic search API, searches for an text passed a the `q` search query
// Feel free to improve this if you have time, but be sure
// to fulfill the frontend requirements first
app.get("/search", function (req, res) {
  const term = req.query.q;
  const quotes = JSON.parse(data);
  const regex = new RegExp(term, "ig");
  const results = quotes.filter((q) => regex.test(q));

  res.json(results);
});

app.listen(4242);
