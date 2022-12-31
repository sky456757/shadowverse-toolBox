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
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};

// Get User content by user id
exports.GetUser = async (req, res) => {
  const id = req.query.User_ID;
  try {
    const target = await User.find({ User_ID: id });
    console.log(target);
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
    User_info: body.User_info,
  });
  try {
    await newUser.save();
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};

// insert deck
let newDeckId = 0;
exports.insertDeck = async (req, res) => {
  const body = req.body;
  // console.log(body);
  try {
    const newUserDeck = new UserDeck({
      Deck_ID: newDeckId,
      User_ID: body.User_ID,
      craft: body.craft,
      mode: body.mode,
      info: body.info,
      name: body.name,
    });
    // console.log(newUserDeck);
    // await newUserDeck.save(function (err, deck) {
    //   newDeckId += 1
    //   // newDeckId = deck._id;
    //   // console.log("inhere:", newDeckId);
    // });
    await newUserDeck.save();
    for (let i = 0; i < body.card.length; i++) {
      console.log(i, newDeckId);
      const newDeck = new Deck({
        Deck_ID: newDeckId,
        Card_ID: body.card[i].Card_ID,
        Amount: body.card[i].Amount,
      });
      await newDeck.save();
    }
    newDeckId += 1;
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};

// insert Article
exports.insertArticle = async (req, res) => {
  const body = req.body;
  console.log(body);
  const newArticle = new Article({
    Artical_name: body.Artical_name,
    Author_ID: body.Author_ID,
    Content: body.Content,
    Comments: body.Comments,
    image: body.image,
  });
  try {
    await newArticle.save();
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};
