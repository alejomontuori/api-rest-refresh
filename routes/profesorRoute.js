const express = require("express");
const router = express.Router();
const ProfesorCon = require("../controllers/profesorCon.js")

router.get("/", ProfesorCon.consultar);

router.post("/", ProfesorCon.ingresar);

router.route("/:id")
    .put(ProfesorCon.actualizar)
    .delete(ProfesorCon.borrar)
    .get(ProfesorCon.consultarDetalle);


module.exports = router;
