// require("dotenv").config();    
// var cookieParser = require("cookie-parser");
// var cors = require("cors");
// var express = require("express");
// var helmet = require("helmet");
// var logger = require("morgan");
// var mongoose = require('mongoose');
// var passport = require('passport');
// var path = require("path");
// var session = require("express-session");

// var bookingsRouter = require("./routes/bookings");
// var indexRouter = require("./routes/index");
// var productsRouter = require("./routes/products");
// var sellersRouter = require("./routes/sellers");
// var usersRouter = require("./routes/users");

// var app = express();

// mongoose
// .connect(process.env.DB_CONNECT, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB is ready"))
// .catch((err) => console.log(err));
  
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(helmet());
// app.use(cors());
// app.use(passport.initialize());

// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/products", productsRouter);
// app.use("/bookings", bookingsRouter);
// app.use("/sellers", sellersRouter);
// app.use("/users", usersRouter);


// module.exports = app;