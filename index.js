const express = require("express");
const tools = require("./routes");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", tools);

app.listen(5005, () => {
  console.log("listening on port 5005");
});
