const mongoose = require("mongoose");
const placesSchema = new mongoose.Schema({
    array_id_profile : Number,
    name :{
        type:String, max:200
    },   
    email: String,
    password:String,
    uf:String,
    city:String,
    imgpProfile: String,
    pdc: Boolean,
    typePDC: String,
    favoritesAdv: String,
    placesRsvd: String,
    create_dat: {
        type: Date,
        default: Date.now
    },  
    
})

module.exports = mongoose.model('Places', placesSchema)