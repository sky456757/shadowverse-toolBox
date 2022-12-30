import CardRoute from './Card_content'
import ActivityRoute from './Activity'
import ArticleRoute from './Article'
import DeckRoute from './Deck'
import UserRoute from './User'

const wrap = fn => (...args) => fn(...args).catch(args[2])

function main(app) {
  // about cards
  app.get('/api/initCard', wrap(CardRoute.InitCard))
  app.get('/api/findCard', wrap(CardRoute.FindCard))
  app.get('/api/getCard', wrap(CardRoute.GetCard))
  // about activities
  app.get('/api/initActivity', wrap(ActivityRoute.InitActivity))
  // about articles
  app.get('/api/initArticle', wrap(ArticleRoute.InitArticle))
  app.get('/api/getArticle', wrap(ArticleRoute.GetArticle))
  // about deck
  app.get('/api/initUserDeck', wrap(DeckRoute.InitUserDeck))
  app.get('/api/DeckDetail', wrap(DeckRoute.DeckDetail))
  // about user
    // insert user
  app.post('/api/insertUser', wrap(UserRoute.insertUser))
    // get user
  app.get('/api/getUser', wrap(UserRoute.GetUser))
    // insert articles
  app.post('/api/insertArticle', wrap(UserRoute.))
    // insert deck
  app.post('/api/insertDeck', wrap(UserRoute.insertDeck))
    // get user articles
  app.get('/api/getUserArticles', wrap(UserRoute.GetUserArticles))
    // get user card deck
  app.get('/api/getUserDecks', wrap(UserRoute.GetUserDecks))
  
}

export default main