// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");

// const PORT = process.env.PORT || 8080;

// const app = express();

// const apiRoutes = require("./routes/api-routes");

// app.use(apiRoutes);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// app.get("/exercise", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/exercise.html"));
//   });
  
//   app.get("/stats", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/stats.html"));
//   });
  
//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });
  
//   app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");


const PORT = process.env.PORT || 8080;

// const User = require("");
const app = express();

var apiRoutes = require("./routes/api-routes");
// var htmlRoutes = require("./routes/htmlRoutes");

app.use(apiRoutes);
//app.use(htmlRoutes);

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));





mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
