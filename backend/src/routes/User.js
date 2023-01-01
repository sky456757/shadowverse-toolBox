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

// Get User content by user name
exports.GetUser = async (req, res) => {
  const id = req.query.User_ID;
  try {
    const target = await User.findOne({ User_name: id });
    console.log(target);
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};
// Get User content by user id
exports.GetUserByID = async (req, res) => {
  const id = req.query.User_ID;
  try {
    const target = await User.findOne({ User_ID: id });
    console.log(target);
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};
exports.UpdateUserByID = async (req, res) => {
  const id = req.query.User_ID;
  const rank = req.query.rank;
  const info = req.query.info;
  try {
    let target = await User.findOne({ User_ID: id });
    target.User_info = info
    target.User_rank = rank
    console.log(target);
    await target.save();
    res.status(200).send({ message: "success", contents: target });
  } catch (err) {
    res.status(403).send({ message: "error", contents: [] });
  }
};

// insert user
exports.insertUser = async (req, res) => {
  const body = req.body;
  let uid = await User.find({}).count() +1
  const newUser = new User({
    User_ID: String(uid),
    User_name: body.User_name,
    User_password: body.User_password,
    User_rank: "Beginner",
    User_info: "這個人很懶，還沒寫自我介紹",
  });
  try {
    await newUser.save();
    console.log(uid)
    res.status(200).send({ message: "success", contents: uid});
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};

// insert deck

exports.insertDeck = async (req, res) => {
  console.log("get");
  const body = req.body;
  const count = await UserDeck.find({}).count();
  console.log(body);
  try {
    const newUserDeck = new UserDeck({
      Deck_ID: String(count+1),
      User_ID: String(body.User_ID),
      User_Name: body.User_Name,
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
      console.log(i, String(count+1));
      const newDeck = new Deck({
        Deck_ID: String(count+1),
        Card_ID: body.card[i]._id,
        Card_cost: body.card[i].Cost,
        Card_name: body.card[i].Card_name,
        Amount: body.card[i].amount,
      });
      await newDeck.save();
    }
    res.status(200).send({ message: "success" });
    
  } catch (err) {
    console.log(err);
    res.status(403).send({ message: "error" });
  }
};

// insert Article
exports.insertArticle = async (req, res) => {
  const body = req.body;
  console.log(body);
  const newArticle = new Article({
    Artical_name: body.Artical_name,
    Author_ID: String(body.Author_ID),
    Content: body.Content,
    Comments: body.Comments,
    image: body.image,
  });
  
  try {
    await newArticle.save();
    res.status(200).send({ message: "success" });
  } catch (err) {
    res.status(403).send({ message: "error" });
  }
};
