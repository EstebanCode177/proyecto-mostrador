import Empresa from "../models/Empresa.js";



const obtenerEmpresas = async (req, res) => {
    const empresas = await Empresa.find().where('creador').equals(req.usuario);

    res.json(empresas)
};

const crearEmpresa = async (req, res) => {
    const empresa = new Empresa(req.body)
    empresa.creador = req.usuario._id

    try {
        const empresaAlmacenada = await empresa.save();
        res.json(empresaAlmacenada);
    } catch (error) {
        console.log(error);
    }
};

const obtenerEmpresa = async (req, res) => {
    const { id } = req.params;

    // try {
        const empresa = await Empresa.findById(id);
        if(!empresa) {
            const error = new Error("No Encontrado");
            return res.status(404).json({ msg: error.message }); 
        };
     
        if(empresa.creador.toString() !== req.usuario._id.toString()){
            const error = new Error("Acción No Válida");
            return res.status(401).json({ msg: error.message });
        };
        res.json(empresa);
    //   } catch (error) {
    //     res.status(404).json({msg: 'El id que ingresaste no es valido'});
    //   };

    // const empresa = await Empresa.findById(id.trim())
    
    // if (!empresa) {
    //     return res.status(404).json({ msg: "No Encontrado" });
    // }
    // if (empresa.creador.toString() !== req.usuario._id.toString()) {
    //     return res.status(401).json({ msg: "Acción No Válida" });
    //   }
    // res.json(empresa);

    
};

const editarEmpresa = async (req, res) => {
    const { id } = req.params;

    const empresa = await Empresa.findById(id);
  
    if (!empresa) {
      const error = new Error("No Encontrado");
      return res.status(404).json({ msg: error.message });
    }
  
    if (empresa.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("Acción No Válida");
      return res.status(401).json({ msg: error.message });
    }
  
    empresa.nombre = req.body.nombre || empresa.nombre;
  
    try {
      const empresaAlmacenada = await empresa.save();
      res.json(empresaAlmacenada);
    } catch (error) {
      console.log(error);
    }

};

const eliminarEmpresa = async (req, res) => {
    const { id } = req.params;

    const empresa = await Empresa.findById(id);
  
    if (!empresa) {
      const error = new Error("No Encontrado");
      return res.status(404).json({ msg: error.message });
    }
  
    if (empresa.creador.toString() !== req.usuario._id.toString()) {
      const error = new Error("Acción No Válida");
      return res.status(401).json({ msg: error.message });
    }

    try {
        await empresa.deleteOne();
        res.json({ msg: "Empresa Eliminada" });
      } catch (error) {
        console.log(error);
    }
};

const agregarColaborador = async (req, res) => {

};

const eliminarColaborador = async (req, res) => {

};

const obtenerLocales = async (req, res) => {

};

const nuevoLocal = async (req, res) => {

};

const obtenerLocal = async (req, res) => {

};

const editarLocal = async (req, res) => {

};

const eliminarLocal = async (req, res) => {

};

const obtenerProductos = async (req, res) => {

};



export {
    obtenerEmpresas,
    crearEmpresa,
    obtenerEmpresa,
    editarEmpresa,
    eliminarEmpresa,
    agregarColaborador,
    eliminarColaborador,
    obtenerLocales,
    nuevoLocal,
    obtenerLocal,
    editarLocal,
    eliminarLocal,
    obtenerProductos
}