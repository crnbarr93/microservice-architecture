const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const baseRouter = require("./ctrl");
const app = express();
const port = 8002;

app.use(cors());
app.use(bodyParser.json());

app.use(baseRouter);

app.listen(port, () => {
  console.log(`Service two listening at http://localhost:${port}`);
});
