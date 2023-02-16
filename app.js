const express = require("express");
const logger = require("morgan");
const cors = require("./middleware/cors")
const registerRouter = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");
const sessionRouter = require("./routes/sessionsRoutes");
// const userRouter = require("./routes/userRoutes");
const gamesRouter = require("./routes/gamesRoutes");

const app = express();

require('./dbConnect/connect')

app.use(logger("dev"));
app.use(express.json());
app.use(cors);
app.use('/login', loginRouter )
app.use('/games', gamesRouter );
app.use("/sessions", sessionRouter)
app.use('/register', registerRouter);

module.exports = app;
