const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new Schema(
    {
        image: {type: String, required: true, minlength: 1},
        
       
        name: {type:String, required: true, minlength:1 },
        role: {type:String},
        

        facebook: {type:String, minlength:2 },
        twitter: {type:String, minlength:2 },
        instagram: {type:String, minlength:2 },
        linkedIn: {type:String, minlength:2 },
    },
    {
        timestamps: true,
    }
);

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;