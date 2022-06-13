const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalePropertyDetailSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    PropertyTitle: { type: String, minlength: 3, required: true },
    PropertyTagline: { type: String, minlength: 3, required: true },
    Address: { type: String, minlength: 5, required: true },
    City: { type: String, minlength: 3, required: true },
    Price: { type: Number, minLength: 5, required: true },
    DatePosted: { type: Date, required: true },
    Description: { type: String, minlength: 50, required: true },
    PropertyMapLocation: { type: String, required: true },

    MainImage: { type: String, required: true },
    Images: [{ type: String, required: true }],

    Bedrooms: { type: Number, required: true },
    Livingrooms: { type: Number, required: true },
    TypeOfProperty: { type: String, required: true },
    Bathrooms: { type: Number, required: true },
    TotalRooms: { type: Number, required: true },
    YearBuilt: { type: Date, required: true }, //A Date or Number?
    Kitchens: { type: Number, required: true },
    AreaSqFt: { type: Number, required: true },
    Owner: { type: String, required: true },

    Amenities: [{ type: String, required: true }],

    Places: [{ type: String, required: true }],
    PopularTags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const SalePropertyDetail = mongoose.model(
  "SalePropertyDetail",
  SalePropertyDetailSchema
);
module.exports = SalePropertyDetail;
