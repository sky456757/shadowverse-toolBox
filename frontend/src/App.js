import logo from './logo.svg';
//import './App.css';
import Home from './containers/Home';
import Articles from './containers/Articles';
import Battles from './containers/Battles';
import Decks from './containers/Decks';
import Cards from './containers/Cards';
import { Routes ,Route } from 'react-router-dom';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#fff',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#F5F5F5',
      },
    },
  });
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route  path='/' element={<Home/>} /> 
        <Route  path='/cards' element={<Cards/>} />
        <Route  path='/cards/:id' element={<Cards/>} />  
        <Route  path='/decks' element={<Decks/>} /> 
        <Route  path='/articles' element={<Articles/>} /> 
        <Route  path='/battles' element={<Battles/>} /> 
			</Routes>
		</ThemeProvider>

  	);
}

export default App;
