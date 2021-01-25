const express = require("express");
const bodyParser = require("body-parser");
const baseRouter = require("./ctrl");
const app = express();
const port = 8001;

app.use(bodyParser.json());

app.use(baseRouter);

app.listen(port, () => {
  console.log(`Service one listening at http://localhost:${port}`);
});
