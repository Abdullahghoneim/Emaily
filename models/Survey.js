const mongoose = require("mongoose");

const RecipientSchema = require("./Recipient");

const { Schema } = mongoose;

const SurveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yas: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "user" },
  dateSent: Date,
  lastResponded: Date
});

module.exports = mongoose.model("surveys", SurveySchema);
