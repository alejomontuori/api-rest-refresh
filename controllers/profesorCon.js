class ProfesorCon {
    constructor() {}
  
    consultar(req, res) {
      res.json({ msg: "consulta profesores" });
    }

    ingresar(req, res) {
      res.json({ msg: "agregar profesor" });
    }

    consultarDetalle(req, res) {
      const {id} = req.params;
      res.json({ msg: `consulta el profesor con id: ${id}` });
    }
  
    actualizar(req, res) {
      res.json({ msg: "actualizar un profesor" });
    }
  
    borrar(req, res) {
      res.json({ msg: "eliminar un profesor" });
    }
  }
  
  module.exports = new ProfesorCon();
