class ProfesorCon {
    constructor() {}
  
    consultar(req, res) {
      res.json({ msg: "consulta profesores" });
    }
  
    consultarDetalle(req, res) {
      res.json({ msg: "consulta un profesor" });
    }
  
    ingresar(req, res) {
      res.json({ msg: "agregar profesor" });
    }
  
    actualizar(req, res) {
      res.json({ msg: "actualizar un profesor" });
    }
  
    borrar(req, res) {
      res.json({ msg: "eliminar un profesor" });
    }
  }
  
  module.exports = new ProfesorCon();
  