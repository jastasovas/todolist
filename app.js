require("dotenv").config();
const cors = require("cors");

const express = require("express");
//error handler
const errorHandler = require("./middleware/errorHandler.js");

//connect to db
const connectToDB = require("./config/db.js");
connectToDB();

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/tasks", require("./routes/taskRoutes.js"));

app.use(errorHandler);
//port
app.listen(process.env.PORT, () => {
  console.log(`Server is running: port-${process.env.PORT}`);
});
