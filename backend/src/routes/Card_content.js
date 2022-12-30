import Card_content from '../models/Card_content'

// Get only _id, cardname and image for all cards
exports.initCard = async(req, res) => {
    try{
        const target = await Card_content.find({}).select('Card_name Image');
        console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}

// Get only match same query _id, cardname and image
exports.FindCard = async(req, res) => {
    const cost = req.query.cost
    const craft = req.query.craft
    const rare = req.query.rare
    try{
        const target = await Card_content.find({Cost: cost, Craft: craft, Rare:rare}).select('Card_name Image');
        console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}

// Get card content by _id
exports.GetCard = async(req, res) => {
    const id = req.query._id
    try{
        const target = await Card_content.find({_id: id});
        console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}