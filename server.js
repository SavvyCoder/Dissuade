const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users.js");
const posts = require("./routes/api/posts.js");
const profile = require("./routes/api/profile.js");

//db config
const db = require("./config/keys").mongoURI;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

//passport config
require("./config/passport.js")(passport);

//Use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

//Serve static assets when in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8081;

app.listen(port, process.env.IP, function() {
  console.log(`Dissuade Server running on port ${process.env.PORT}`);
});
