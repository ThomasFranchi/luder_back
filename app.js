const express = require("express");
const logger = require("morgan");
const cors = require("./middleware/cors")
const userInfo = require("./middleware/userInfo")

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
// app.use(userInfo);
app.use('/players', playersRouter)
app.use('/games', gamesRouter );
app.use("/sessions", sessionRouter)


module.exports = app;
