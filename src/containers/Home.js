import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Foot from "../components/Foot";
import TopSwiper from "../components/TopSwiper";
import DeckCard from "../components/DeckCard";
import { Button } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Home() {

    useEffect(() => {
        // Just run the first time
        //alert('render')
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
                    <Grid sx={{ width: '100%', height :'100%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid sx={{ width: '100%', height : 0.1,alignItems: "center",justifyContent: 'center',display: { xs: 'none', md: 'flex' }}} container columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={12} md={12}  height={1} width = '100%'alignItems="center" justifyContent = "center">
                                <TopSwiper/>
                            </Grid>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'3%',alignItems: "center",justifyContent: 'space-around',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
                                <h2>精選牌組</h2>
                            </Grid>
                            <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" textAlign="center" height = {1}>
                            </Grid>
                        </Grid>
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
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'1%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'76%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Foot/>
        </>

  	);
}

export default Home;