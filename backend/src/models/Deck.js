import mongoose, { model } from 'mongoose'

const Schema = mongoose.Schema

const DeckSchema = Schema({
    _id: {type: Number, require: true},
    Card_ID: {type: Number, require: true},
    Amount: {type: Number, require: true}
}, {
    collection: 'Cards_in_deck',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Model = mongoose.model('Cards_in_deck', DeckSchema)

export default Model