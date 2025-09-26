const db = require('../database/conexion.js');

class EstudianteCon {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: "consulta alumnos" });
  }

  consultarDetalle(req, res) {
    const {id}= req.params;
    res.json({ msg: `consulta el alumno con id: ${id}` });
  }

  ingresar(req, res) {
    res.json({ msg: "agregar alumno" });
  }

  actualizar(req, res) {
    res.json({ msg: "actualizar un alumno" });
  }

  borrar(req, res) {
    res.json({ msg: "eliminar un alumno" });
  }
}

module.exports = new EstudianteCon();
