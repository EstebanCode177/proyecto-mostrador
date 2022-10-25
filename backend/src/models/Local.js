import mongoose from "mongoose";

const localSchema = mongoose.Schema({
    direccion: {
        type: String,
        trim: true,
    },
    ciudad: {
        type: String,
        trim: true,
    },
    estado: {
        type: String,
        trim: true,
    },
    pais: {
        type: String,
        trim: true,
    },
    ubicacion: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa'
    }
},
{
  timestamps: true,
}
);

const Local = mongoose.model("Local", localSchema);
export default Local;