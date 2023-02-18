// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Custom Handlebars helpers
const hbs = exphbs.create({ helpers });

// Session with cookies
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 5 * 60 * 1000, // Expires after 5 minutes
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Turn on routes
app.use(routes);

// Set default template engine to Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Connect to the database before starting the Express.js server
// Force false to prevent data drop on every sync
sequelize.sync({ force: false }).then(() => {
  // Asynchronized callback
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
