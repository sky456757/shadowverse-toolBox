import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleSchema = Schema({
    // _id: { type: Number },
    Artical_ID: { type: Number, required: true },
    Artical_name: { type: String, required: true },
    Author_ID: { type: Number, require: true},
    Content: {type: String, require: true},
    Comments: [{type: String, require: true}],
    image: {type: String, require: true},
}, {
    collection: 'Article',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const Model = mongoose.model('Article', ArticleSchema)

export default Model