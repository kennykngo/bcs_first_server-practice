const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));

const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes); // endpoint in which we expect it to be hit at

// sets up api routes for sending data to the client
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

// runs server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
