const KEY = require("../config/key");
const isAuth = require("../middleware/isAuth");
const stripe = require("stripe")(KEY.STRIPE_SECRET_KEY);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 Credits",
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
