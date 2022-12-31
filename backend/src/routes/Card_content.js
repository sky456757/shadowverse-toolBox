import Card_content from '../models/Card_content'

// Get only _id, cardname and image for all cards
exports.InitCard = async(req, res) => {
    const page = req.query.page
    try{
        const target = await Card_content.find({}).skip(48 * (1 - page)).limit(48).select('Card_name Image');
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

// Get card in six set that satisfies craft
exports.GetCardFromSixSet = async(req, res) => {
    const craft = req.query.craft
    let crafts = ["中立"]
    crafts.push(craft)
    const pack = ["基本卡", "十禍鬥爭", "天象樂土", "極天龍鳴", "示天龍劍", "超越災禍"]
    try{
        const target = await Card_content.find(
            { $or: [{Card_pack: {$in: pack}, Craft: {$in: crafts}}] }).sort({"Cost": 1}).select('Card_name Cost');
        console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}