import CardRoute from './Card_content'
import ActivityRoute from './Activity'
import ArticleRoute from './Article'
import DeckRoute from './Deck'

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
  // about decks
  app.get('/api/initUserDeck', wrap(DeckRoute.InitUserDeck))
  app.get('/api/DeckDetail', wrap(DeckRoute.DeckDetail))
  // about users
}

export default main