const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: String,
    image:{
       type: String,
       default:"https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
       set: (v) => v === ""
        ? "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww"
         : v,
    },
    price: {
   type: Number,
   default: 0,   
},
    location: String,
    country: String,
    
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;