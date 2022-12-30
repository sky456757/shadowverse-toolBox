import Article from '../models/Article'

// Init card
exports.InitArticle = async(req, res) => {
    try{
        const target = await Article.find({}).select('_id Artical_name Content image');
        console.log(target)
        //console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}

// Get Article content by _id
exports.GetArticle = async(req, res) => {
    const id = req.query._id
    try{
        const target = await Article.find({_id: id});
        console.log(target)
        //console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}