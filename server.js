const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./src/routes");

const app = express();

//para resolver Mongoose Deprecation Warning the strictQuery
mongoose.set("strictQuery", true);
//conectar com o mongodb
mongoose.connect("mongodb://127.0.0.1/CursoMongoDb",
  //função de erro caso não conecte ao banco de dados
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongodb conectado com sucesso");
    }
  }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3003, function () {
  console.log("Servidor iniciou com sucesso");
});
