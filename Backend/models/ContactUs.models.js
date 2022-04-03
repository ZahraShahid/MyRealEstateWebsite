const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactUsSchema = new Schema(
  {
    description: { type: String, required: true, minlength: 50 },
    location: { type: String, required: true, minlength: 10 },
    phoneNumber1: { type: String, required: true, minlength: 5 },
    phoneNumber2: { type: String, unique: true, minlength: 5 },
    phoneNumber3: { type: String, unique: true, minlength: 5 },

    days1: { type: String, required: true, minlength: 5 },
    days2: { type: String, minlength: 3 },
    days3: { type: String, minlength: 3 },

    timings1: { type: String, required: true, minlength: 5 },
    timings2: { type: String, minlength: 1 },
    timings3: { type: String, minlength: 1 },

    facebook: { type: String, minlength: 5 },
    twitter: { type: String, minlength: 5 },
    instagram: { type: String, minlength: 5 },
    skype: { type: String, minlength: 5 },
    email: { type: String, minlength: 5 },

    locationLink: { type: String, required: true, minlength: 5 },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("ContactUS", contactUsSchema);
module.exports = ContactUs;
