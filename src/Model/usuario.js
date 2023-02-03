const mongoose = require("mongoose");
const { schema } = require("./places");
/* const Places = require("./places")
const placesType = new Places() */
const dataSchema = new mongoose.Schema({
    id_profile : Number,
    name : String,
    email: String,
    password:String,
    uf:String,
    city:String,
    imgpProfile: String,
    pdc: Boolean,
    typePDC: String,
    favoritesAdv: String,
    placesRsvd:[schema],
    createdAt: String,  
    
})

const user_tourist = mongoose.model('Usuario', dataSchema)
module.exports= user_tourist;
