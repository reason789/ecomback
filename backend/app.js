const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json()); // This middleware is often used to extract JSON data from HTTP requests, such as from a REST API.
app.use(cookieParser()); // client side theke cookie newar jonno

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

// Route import
app.use("/api/v1", product);

app.use("/api/v1", user);

app.use("/api/v1", order);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
