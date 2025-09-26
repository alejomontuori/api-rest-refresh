const express = require("express");
const router = express.Router();
const EstudianteCon = require("../controllers/estudianteCon.js")

router.get("/", EstudianteCon.consultar);

router.post("/", EstudianteCon.ingresar);

router.route("/:id")
    .put(EstudianteCon.actualizar)
    .delete(EstudianteCon.borrar)
    .get(EstudianteCon.consultarDetalle);


module.exports = router;
