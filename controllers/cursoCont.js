const db = require('../database/conexion.js');

class CursoCon {
    constructor() {}
  
    consultar(req, res) {
      res.json({ msg: "consulta de cursos" });
    }
  
    consultarDetalle(req, res) {
      const {id}= req.params;
      res.json({ msg: `consulta el curso con id: ${id}` });
    }
  
    ingresar(req, res) {
      res.json({ msg: "agregar curso" });
    }
  
    actualizar(req, res) {
      res.json({ msg: "actualizar un curso" });
    }
  
    borrar(req, res) {
      res.json({ msg: "eliminar un curso" });
    }
  }
  
  module.exports = new CursoCon();
  