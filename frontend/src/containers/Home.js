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
import ArticleCard from "../components/ArticleCard";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const displayTitle = (T) =>
(
    <Grid sx={{ width: '70%', height :'9vh',alignItems: "center",justifyContent: 'space-around',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
            <h2>{T}</h2>
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
            <h2>{T}</h2>
        </Grid>
    </Grid>
)

const displayArticleCards = (num) =>
{
    const ArticleCount = Array(num).fill(0)
    const displaylength = 3
    const rows = Math.ceil(ArticleCount.length/displaylength)
    const h = String(rows*8)+"%"
    return(
        <Grid height = {h} sx={{ width: '70%',alignItems: "center",justifyContent: 'start',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 12 }}>
            {ArticleCount.map(() => 
            (
                <Grid item xs={3} sm={3} md={12/displaylength} alignItems="center" justifyContent = "center" height = {1/rows}>
                    <ArticleCard/>
                </Grid>
            ))}
        </Grid>
    )
}
const imglink = "https://store.ymgal.games/archive/main/d5/d5fc5153d78c42d28f29c8bd2132b21d.webp"
function Home() {

    useEffect(() => {
        // Just run the first time
      }, [])
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
                height: '300vh',
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
                        <Grid sx={{ width: '100%', height : 0.1,alignItems: "center",justifyContent: 'center',display: { xs: 'none', md: 'flex' }}} container columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={12} md={12}  height={1} width = '100%'alignItems="center" justifyContent = "center">
                                <TopSwiper/>
                            </Grid>
                        </Grid>
                        {displayTitle("精選牌組")}
                        <Grid sx={{ width: '70%', height :'6%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <DeckCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <DeckCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <DeckCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <DeckCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" height = {1}>
                                <DeckCard/>
                            </Grid>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'40%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 11 }}>
                            <Grid item xs={3} sm={3} md={8} alignItems="center" justifyContent = "center" height = {1}>
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
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
                                {displaySideTitle("活動時程")}
                            </Grid>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'28%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Foot/>
        </>

  	);
}

export default Home;