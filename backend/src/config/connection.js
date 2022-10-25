import mongoose from 'mongoose';

const conectarDB = mongoose.connect('mongodb://localhost:27017/db-test')
.then((db)=>{
    console.log('Conexión exitosa')
})
.catch((err)=>{
    console.log('Ha ocurrido un error al conectarse '+err)
})

export default conectarDB;