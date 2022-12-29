import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ActivitySchema = Schema({
    _id: {type: Number, require: true},
    Name: { type: String, required: true },
    Start_date: {type: String, require: true},
    End_date: {type: String, require: true},
    Content: {type: String, require: true},
}, {
    collection: 'Activity',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Model = mongoose.model('Activity', ActivitySchema)
console.log(Model)

export default Model