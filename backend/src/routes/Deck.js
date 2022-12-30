import Deck from '../models/Deck'
import UserDeck from '../models/UserDeck'

exports.InitUserDeck = async(req, res) => {
    try{
        const target = await UserDeck.find({}).select('User_ID info name');
        console.log(target)
        res.status(200).send({ message: 'success', contents: target });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}
exports.DeckDetail = async(req, res) => {
    let id = req.query.Deck_ID
    try{
        const target = await UserDeck.find({_id: id});
        console.log(target)
        const target2 = await Deck.find({Deck_ID: id})
        console.log(target2)
        const deck = {deckinfo: target, deckCard: target2}
        //console.log(target)
        res.status(200).send({ message: 'success', contents: deck });
    }catch(err){
        res.status(403).send({ message: 'error', contents: []})
    }
}