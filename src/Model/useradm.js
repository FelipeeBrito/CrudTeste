const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    useradm_id_profile : Number,
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
const useradm = mongoose.model('places', userSchema)
module.exports = useradm;