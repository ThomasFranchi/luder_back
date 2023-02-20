const express = require("express");
const logger = require("morgan");
const cors = require("./middleware/cors");
const authCheck = require("./middleware/authCheck");

const registerRouter = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");
const sessionRouter = require("./routes/sessionsRoutes");
const playersRouter = require("./routes/playersRoutes");
const gamesRouter = require("./routes/gamesRoutes");

const app = express();

require('./dbConnect/connect')

app.use(logger("dev"));
app.use(express.json());
app.use(cors);

app.use('/login', loginRouter )
app.use('/register', registerRouter);

app.use('/players', authCheck, playersRouter)
app.use('/games', authCheck, gamesRouter);
app.use("/sessions", authCheck, sessionRouter)


module.exports = app;
