//DEPENDENCIES importing ,
const cors = require("cors");
const express = require("express");
const bookmarksController = require("./controllers/bookmarkController.js");

//CONFIGURE THE INSTANCE OF THE APP BEING RAN WITH EXPRESS, creates the express application
const app = express();

//MIDDLEWARE, mounts functions to app. that will have access to the req,res cycle
//allows optimization of security
//applied to the api this specifies the origin and location of where the api is being accessed
app.use(cors());
//parses incoming json reuests with json payloads. It looks at requests where the content-type matches the type option. (headers)
app.use(express.json());
app.use("/bookmarks", bookmarksController);

//ROUTES


app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
//app.get instructs the server to respond based on the get request at that given route.
//it contains a callback function that listens to the incoming req object and responds with a res object.


//EXPORT
//is read by node.js and signifies which bits of code should be exported from a file. In order
//to be used in ofther files.
module.exports = app;
