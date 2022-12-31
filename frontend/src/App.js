import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

// about cards
const getInitCard = async () => {
  // example
  const page = 1

  const {
    data: { message, contents },
  } = await instance.get("/initCard", {
    params: { page: page },
  });
  console.log(contents);
};

const getCardbyID = async () => {
  // example
  const id = 118821010;

  const {
    data: { message, contents },
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
    data: { message, contents },
  } = await instance.get("/findCard", {
    params: { cost: cost, craft: craft, rare: rare },
  });
  console.log(contents);
};

const getCardFromSixSet = async () => {
  // example
  const craft = "精靈";

  const {
    data: { message, contents },
  } = await instance.get("/getCardFromSixSet", {
    params: { craft: craft },
  });
  console.log(contents);
};

// about articles
const getInitArticle = async () => {
  // example
  const page = 1

  const {
    data: { message, contents },
  } = await instance.get("/initArticle", {
    params: { page: page },
  });
  console.log(contents);
};

const getArticlebyID = async () => {
  // example
  const id = "63af0557a2ec484c1476752e";

  const {
    data: { message, contents },
  } = await instance.get("/getArticle", {
    params: { _id: id },
  });
  console.log(contents);
};

// about activities
const getInitActivity = async () => {
  const {
    data: { message, contents },
  } = await instance.get("/initActivity", {});
  console.log(contents);
};

// about deck
const getInitDeck = async () => {
  // example
  const page = 1

  const {
    data: { message, contents },
  } = await instance.get("/initDeck", {
    params: { page: page },
  });
  console.log(contents);
};

const getDeckDetailbyID = async () => {
  // example
  const id = 1;

  const {
    data: { message, contents },
  } = await instance.get("/deckDetail", {
    params: { Deck_ID: id },
  });
  console.log(contents);
};

// about user (after login)

// insert user
const insertUser = async () => {
  // example
  const UserID = 1;
  const UserName = "abc";
  const UserPassword = "def";
  const UserRank = "ghi";
  const UserInfo = "haha";

  await instance.post("/insertUser", {
    User_ID: UserID,
    User_name: UserName,
    User_password: UserPassword,
    User_rank: UserRank,
    User_info: UserInfo,
  });
};

// get user
const getUserbyUserID = async () => {
  // example
  const id = 1;

  const {
    data: { message, contents },
  } = await instance.get("/getUser", {
    params: { User_ID: id },
  });
  console.log(contents);
};

// insert article
const insertArticle = async () => {
  //example
  const ArticalName = "abc"
  const AuthorID = 1
  const Content = "def"
  const Comments = ["haha", "good"]
  const image = "http..."

  await instance.post("/insertArticle", {
    Artical_name: ArticalName,
    Author_ID: AuthorID,
    Content: Content,
    Comments: Comments,
    image: image,
  });
};

// insert deck
const insertDeck = async () => {
  //example
  const User_ID = 1;
  const craft = "abc";
  const mode = "def";
  const info = "ghi";
  const name = "jkl";
  const card = [
    { Card_ID: 123, Amount: 1 },
    { Card_ID: 456, Amount: 2 },
  ];

  await instance.post("/insertDeck", {
    User_ID: User_ID,
    craft: craft,
    mode: mode,
    info: info,
    name: name,
    card: card,
  });
};

// get user articles
const getUserArticles = async () => {
  // example
  const id = 1;

  const {
    data: { message, contents },
  } = await instance.get("/getUserArticles", {
    params: { User_ID: id },
  });
  console.log(contents);
};

// get user deck
const getUserDecks = async () => {
  // example
  const id = 1;

  const {
    data: { message, contents },
  } = await instance.get("/getUserDecks", {
    params: { User_ID: id },
  });
  console.log(contents);
};

// about home
const initHome = async () => {
  const {
    data: { message, contents },
  } = await instance.get("/initHome", {
  });
  console.log(contents);
};

function App() {
  initHome();
}

export default App;
