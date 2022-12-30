import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

// get Card
const getInitCard = async () => {
  const {
    data : { message, contents },
  } = await instance.get("/initCard", {});
  console.log(contents);
};

const getCardbyID = async () => {
  // example
  const id = 118821010;

  const {
    data : { message, contents },
  } = await instance.get("/getCard", {
    params: { _id: id },
  });
  console.log(contents);
};

const getSearchCard = async () => {
  // example
  const cost = 0;
  const craft = "復仇者";
  const rare = "白銀";

  const {
    data : { message, contents },
  } = await instance.get("/findCard", {
    params: { cost: cost, craft: craft, rare: rare },
  });
  console.log(contents);
};

// get Article
const getInitArticle = async () => {
  const {
    data : { message, contents },
  } = await instance.get("/initArticle", {});
  console.log(contents);
};

const getArticlebyID = async () => {
  // example
  const id = 118821010;

  const {
    data : { message, contents },
  } = await instance.get("/getArticle", {
    params: { _id: id },
  });
  console.log(contents);
};

// get activity
const getInitActivity = async () => {
  const {
    data : { message, contents },
  } = await instance.get("/initActivity", {});
  console.log(contents);
};

// get all deck
const getInitUserDeck = async () => {
  const {
    data : { message, contents },
  } = await instance.get("/initUserDeck", {});
  console.log(contents);
};

const getDeckDetailbyID = async () => {
  // example
  const id = 118821010;

  const {
    data : { message, contents },
  } = await instance.get("/DeckDetail", {
    params: { Deck_ID : id },
  });
  console.log(contents);
};



// insert
const storeComment = async () => {
  await instance.post("createComment/", {
    // TODO Part III-3-b: store the comment to the DB
    restaurantId: restaurantId,
    name: name,
    rating: rating,
    content: content,
  });
};

function App() {
  getCardbyID();
}

export default App;
