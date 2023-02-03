const Usuario = require("../Model/usuario")

module.exports = {
    async index(req,res){
        const usuarios = await Usuario.find(); // select * from usuario
        res.json(usuarios)
    },
    
    async store(req,res){
        const {id_profile,name,email,password,uf,city,imgProfile,pdc,typePdc,favoritesAdv,placesRsvd,createdAt} = req.body;
           
        let dataCreate = {}
        dataCreate={
            id_profile,name,email,password,uf,city,imgProfile,pdc,typePdc,favoritesAdv,placesRsvd,createdAt
        }
        const usuarios = await Usuario.create(dataCreate); // select * from usuario
    }

}

   