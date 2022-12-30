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

export default function UserTab() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (ind) => 
  {
      setOpen(true);
      
      //alert(ind);
  }
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs textColor="primary" indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="分享的牌組" {...a11yProps(0)} />
          <Tab label="撰寫的文章" {...a11yProps(1)} />
          <Tab label="設定" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={2}>
          <Button color="secondary"onClick = {() => handleOpen()}> 
            <DeckCard/>
          </Button>                  
        </Stack> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={2}>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </Stack> 
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2}>
            <Box>用戶名稱: 123</Box>
            <Box>自我介紹:</Box>
            <TextareaAutosize minRows={3} />
            <Box></Box>
        </Stack> 
        <Grid sx={{ width: '100%', height :'5vh',alignItems: "center",justifyContent: 'end',display:'flex'}} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "start" height = {1}>
                
            </Grid>
            <Grid item xs={3} sm={3} md={2} alignItems="center" display = "flex"justifyContent = "end" height = {1}>
                <Button onClick={() => {alert('clicked');}}  variant="outlined" color="primary" endIcon={<SendIcon />}>修改</Button>
            </Grid>
        </Grid>
       

      </TabPanel>
    </Box>
    </ThemeProvider>
  );
}
