const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AboutUsSchema = new Schema(
    {
        title1: { type: String, minlength: 10 },
        title2: { type: String, minlength: 10 },

        description: { type: String, minlength: 50 },

        list1: { type: String, minlength: 5 },
        list2: { type: String, minlength: 5 },
        list3: { type: String, minlength: 5 },
        list4: { type: String, minlength: 5 },
        list5: { type: String, minlength: 5 },
        list6: { type: String, minlength: 5 },
        list7: { type: String, minlength: 5 },

        SellProperty: { type: String, minlength: 30 },
        DailyApartment: { type: String, minlength: 30 },
        FamilyHouse: { type: String, minlength: 30 },

        testimonial: { type: String, minlength: 10 },
        ClientSay: { type: String, minlength: 10 },
        line1: { type: String, minlength: 30 },
        say1: { type: String, minlength: 30 },
        say2: { type: String, minlength: 30 },

        ClientName1: { type: String, minlength: 1 },
        ClientName2: { type: String, minlength: 1 },
        ClientPosition1: { type: String, minlength: 1 },
        ClientPosition2: { type: String, minlength: 1 },
    },
    {
        timestamps: true,
    }
);

const AboutUs = mongoose.model('AboutUS', AboutUsSchema);

module.exports = AboutUs;