import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        public_id: String,
        url: String,
    },
    local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Local'
    }
},
{
  timestamps: true,
}
);

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;