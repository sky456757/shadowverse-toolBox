import mongoose, { model } from 'mongoose'

const Schema = mongoose.Schema

const DeckSchema = Schema({
    _id: {type: Number, require: true},
    User_ID: {type: Number, require: true},
    craft: {type: String, require: true},
    mode: {type: String, require: true},
    info: {type: String},
    name: {type: String, require: true}
}, {
    collection: 'Deck',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Model = mongoose.model('Deck', DeckSchema)

export default Model