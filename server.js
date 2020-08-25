const express = require("express");

const PORT = process.env.PORT || 3001;

const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});
