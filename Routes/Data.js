const express = require("express")

const dataController = require("../Controllers/Data")

 const dataRouter = express.Router() // we're linking our data.js file with our /api 

dataRouter.route("/details") //creating aroute
.get(dataController.ApiController) // calling the data.js in controller folder

module.exports = dataRouter