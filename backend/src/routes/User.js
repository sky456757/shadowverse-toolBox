import User from "../models/User";
import Article from "../models/Article";
import UserDeck from "../models/UserDeck";
import Deck from "../models/Deck";
// Get Article content by user id
exports.GetUserArticles = async (req, res) => {
  const id = req.query.User_ID;
  try {
    const target = await Article.find({ Author_ID: id });
    console.log(target);
    //console.log(target)
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};

// Get UserDecks content by user id
exports.GetUserDecks = async (req, res) => {
  const id = req.query.User_ID;
  try {
    const target = await UserDeck.find({ User_ID: id });
    console.log(target);
    //console.log(target)
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};

// insert user
exports.insertUser = async (req, res) => {
  const body = req.body;
  const newUser = new User({
    User_ID: body.User_ID,
    User_name: body.User_name,
    User_password: body.User_password,
    User_rank: body.User_rank,
    User_info: body.User_info
  })
  try {
    await newUser.save();
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};

// get user
exports.GetUser = async (req, res) => {
    const id = req.query.User_ID;
    try {
      const target = await User.find({ User_ID: id });
      console.log(target);
      //console.log(target)
      res.status(200).send({ message: "success", contents: target });
    } catch (err) {
      res.status(403).send({ message: "error", contents: [] });
    }
  };

// insert deck
exports.insertDeck = async (req, res) => {
    const body = req.body;
    const newDeckId = null;
    try {
        const newUserDeck = new UserDeck({
            User_ID: body.User_ID,
            craft: body.craft,
            mode: body.mode, 
            info: body.info,
            name: body.name
        })
        await newUserDeck.save(function(err,deck) {
            newDeckId = deck._id;
        });
    } catch (err) {
        res.status(403).send({ message: "error" });
    }
    try{
        for(let i = 0; i < body.card.length; i++){
            const newDeck = new Deck({
                Deck_ID: newDeckId,
                Card_ID: body.card[i].Card_ID,
                Amount: body.card[i].Amount,
            })
            await newDeck.save();
        }
    } catch (err) {
        res.status(403).send({ message: "error" });
    }
};
