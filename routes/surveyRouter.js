const isAuth = require("../middleware/isAuth");
const requireCredits = require("../middleware/requireCredites");
const mongoose = require("mongoose");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplartes/surveyTemplate");
const Survey = require("../models/Survey");

module.exports = app => {
  app.get("/api/survey/thanks", (req, res) => {
    res.send("Thanks For Voting");
  });
  app.post("/api/survey", isAuth, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = await new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      dateSent: Date.now(),
      _user: req.user.id
    });
    const mailer = await new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
