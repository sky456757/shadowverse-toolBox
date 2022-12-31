import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import ArticleCard from "../components/ArticleCardLong";
import DeckCard from "../components/DeckCard";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
const theme = createTheme({

    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#1976d2',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#F5F5F5',
      },
    },
  });
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LoginTab({info,setInfo}) {
  const [value, setValue] = React.useState(0);
  const [tempID, setTempID] = React.useState("");
  const [tempPassword, setTempPassword] = React.useState("");

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs textColor="primary" indicatorColor="primary" value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
          <Tab label="登入" {...a11yProps(0)} />
          <Tab label="註冊" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={2}>
          <TextField id="outlined-search" label="帳號" type="search" onChange={(e)=>(setTempID(e.target.value))}/>
          <TextField
            id="outlined-password-input"
            label="密碼"
            type="password"
            autoComplete="current-password"
            onChange={(e)=>(setTempPassword(e.target.value))}
          />
          <Button onClick={() => {alert('clicked');}}  variant="outlined" color="primary" endIcon={<SendIcon />}>登入</Button>         
        </Stack> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={2}>
          <TextField id="outlined-search" label="帳號" type="search" onChange={(e)=>(setTempID(e.target.value))}/>
          <TextField id="outlined-search" label="用戶名" type="search" onChange={(e)=>(setTempID(e.target.value))}/>
          <TextField
            id="outlined-password-input"
            label="密碼"
            type="password"
            autoComplete="current-password"
            onChange={(e)=>(setTempPassword(e.target.value))}
          />
          <TextField
            id="outlined-password-input"
            label="確認密碼"
            type="password"
            autoComplete="current-password"
            onChange={(e)=>(setTempPassword(e.target.value))}
          />
          <Button onClick={() => {alert('clicked');}}  variant="outlined" color="primary" endIcon={<SendIcon />}>註冊</Button>         
        </Stack>
      </TabPanel>
    </Box>
    </ThemeProvider>
  );
}
