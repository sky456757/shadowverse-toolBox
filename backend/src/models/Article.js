import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleSchema = Schema({
    _id: {type: Number, require: true},
    Artical_name: { type: String, required: true },
    Author_ID: { type: Number, require: true},
    Date: {type: String, require: true},
    Content: {type: String, require: true},
    Comments: {type: String, require: true},
    image: [{type: String}],
}, {
    collection: 'Article',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Model = mongoose.model('Article', ArticleSchema)
console.log(Model)

export default Model