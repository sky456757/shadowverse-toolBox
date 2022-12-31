import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import { useNavigate ,useLocation,useParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Foot from "../components/Foot";
import TopSwiper from "../components/TopSwiper";
import DeckCard from "../components/DeckCard";
import { Button, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import ArticleCard from "../components/ArticleCard";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: "100%",

    color: theme.palette.text.secondary,

  }));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const displayTitle = (T) =>
(
    <Grid sx={{ width: '70%', height :'9vh',alignItems: "center",justifyContent: 'space-around',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
            <Typography variant="h5">{T}</Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
        </Grid>
        <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" textAlign="center" height = {1}>
        </Grid>
    </Grid>
)
const displaySideTitle = (T) =>
(
    <Grid sx={{ width: '100%', height :'9vh',alignItems: "center",justifyContent: 'start',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={3} sm={3} md={12} alignItems="center" justifyContent = "start" height = {1}>
            <Typography variant="h5">{T}</Typography>
        </Grid>
    </Grid>
)



function Home() {

    useEffect(() => {
        // Just run the first time

      }, [])
      const [open, setOpen] = useState(false);
      const handleOpen = (ind) => 
      {
          setOpen(true);
          
          //alert(ind);
      }
      const handleClose = () => setOpen(false);
	return (
    	<>
            <HeadNav/>
            <Box
            sx = {{
                backgroundColor: '#F5F5F5',
                display: "flex",
                justifyContent: 'center',
                alignContent: "center",
                width: '100%',
                height: '150vh',
                margin: 0,
            }}
            >
                <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    height: "100%",
                    margin: 0.4,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                }}
                >
                    <Grid sx={{ width: '100%', height :'100%',alignContent: "start",alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid sx={{ width: '100%', height : 0.2,alignItems: "center",justifyContent: 'center',display: { xs: 'none', md: 'flex' }}} container columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={12} md={12}  height={1} width = '100%'alignItems="center" justifyContent = "center">
                                <TopSwiper/>
                            </Grid>
                        </Grid>
                        {displayTitle("精選牌組")}
                        
                        <Grid sx={{ width: '70%', height :'12%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <Button onClick = {() => handleOpen()}> 
                                    <DeckCard/>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <Button onClick = {() => handleOpen()}> 
                                    <DeckCard/>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <Button onClick = {() => handleOpen()}> 
                                    <DeckCard/>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <Button onClick = {() => handleOpen()}> 
                                    <DeckCard/>
                                </Button>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <Button onClick = {() => handleOpen()}> 
                                    <DeckCard/>
                                </Button>
                            </Grid>

                        </Grid>
                        <Grid sx={{ width: '70%', height :'77%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 11 }}>
                            <Grid item xs={3} sm={3} md={8} alignItems="center" justifyContent = "center" height = {1}>
                                <Grid sx={{ width: '70%', height :'3vh',alignItems: "center",justifyContent: 'space-around',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                </Grid>
                                {displayTitle("攻略專欄")}
                                <Grid sx={{ width: '100%', height :'20%',alignItems: "center",justifyContent: 'start',display:'flex'}} container spacing={{ xs: 1, md: 2 }} columns={{ xs: 10, sm: 10, md: 12 }}>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                                        <ArticleCard/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
                                <Grid sx={{ width: '100%', height :'3vh',alignItems: "center",justifyContent: 'start',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        
                                </Grid>
                                {displaySideTitle("活動時程")}
                                <Stack spacing={2}>
                                    <Box></Box>
                                    <Item>
                                        <Box>活動一</Box> 
                                        <Box textAlign="end">剩餘 00:00</Box>
                                    </Item>
                                    <Item>
                                        <Box>活動二</Box> 
                                        <Box textAlign="end">剩餘 00:00</Box>
                                    </Item>
                                    <Item>
                                        <Box>活動三</Box> 
                                        <Box textAlign="end">剩餘 00:00</Box>
                                    </Item>
                                </Stack>
                            </Grid>
                        </Grid>
        
                    </Grid>
                </Box>
            </Box>
            <Foot/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction="row" spacing={2}>
                        <Grid sx={{ width: '100%', height :'10%',alignContent: "center",alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            {
                            [0,0,0,0,0,0,0,0,0].map(() =>(
                                <Grid item xs={3} sm={3} md={5}  alignItems="center" justifyContent = "center" display="flex">
                                    <Item2>
                                        <Grid sx={{ width: '100%', height :'2%',alignContent: "center",alignItems: "center",justifyContent: 'center',display:'flex'}} padding = {0}container spacing={{ xs: 2, md: 0 }} columns={{ xs: 9, sm: 9, md: 9 }}>
                                            <Grid item xs={3} sm={3} md={3}  alignItems="center" justifyContent = "center">
                                                <p>費用 ?</p>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}  alignItems="center" justifyContent = "center">
                                                <p>卡名 ?</p>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3}  alignItems="center" justifyContent = "center">
                                                <p>張數 ?</p>
                                            </Grid>
                                        </Grid>
                                    </Item2>
                                </Grid>
                            ))
                            } 
                        </Grid>
                    </Stack>
                </Box>
            </Modal>
        </>

  	);
}

export default Home;