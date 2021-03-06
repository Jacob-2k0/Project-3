const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserListingSchema = new Schema({
  // images: { type: [ String ]},
  make: { type: String },
  model: { type: String },
  year: { type: String },
  // mileageMile: { type: String},
  // mileageKm: { type: String},
  // exteriorcolor: { type: String},
  // interiorcolor: { type: String},
  // //dealerinfo: { type: [ String ]},
  // features: { type: [ String ]},
  // exteriorfeatures: { type: [ String ]},
  // standardfeatures: { type: [ String ]},
  // interiorfeatures: { type: [ String ]},
  // safetyfeatures: { type: [ String ]},
  // dealershipwebsite: { type: [ String ]}
})

const UserListing = mongoose.model("UserListing", UserListingSchema);

module.exports = UserListing;