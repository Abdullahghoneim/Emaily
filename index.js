const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const CookieSession = require("cookie-session");
const keys = require("./config/key");
const passport = require("passport");
require("./models/user");
require("./services/passport");

const app = express();

app.use(bodyParser.json());
app.use(
  CookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRouter")(app);
require("./routes/billingRouter")(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`app runing on port ${PORT}`));
});
