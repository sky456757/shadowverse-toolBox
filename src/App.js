import logo from './logo.svg';
//import './App.css';
import Home from './containers/Home';
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
        main: '#11cb5f',
      },
    },
  });
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route  path='/' element={<Home/>} /> 
			</Routes>
		</ThemeProvider>

  	);
}

export default App;
