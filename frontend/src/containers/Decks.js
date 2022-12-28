import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Foot from "../components/Foot";

import DeckCard from "../components/DeckCard";
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const displayTitle = (T) =>
  (
      <Grid sx={{ width: '70%', height :'9vh',alignItems: "start",justifyContent: 'space-around',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
              <h2>{T}</h2>
          </Grid>
          <Grid item xs={3} sm={3} md={6} alignItems="center" justifyContent = "center" height = {1}>
          </Grid>
          <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" textAlign="center" height = {1}>
          </Grid>
      </Grid>
  )
  
function Decks() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        //alert(value)
    };
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
                height: '100vh',
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
                    <Grid sx={{ width: '100%', height :'100%',alignContent: "start",alignItems: "flex-start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid sx={{ width: '70%', height :'7%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                        </Grid>
                        {displayTitle("牌組分享區")}
                        <Grid sx={{ width: '70%', height :'7%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                        </Grid>
                        <Grid sx={{ width: '67%', height :'20%',alignContent: "start",alignItems: "start",justifyContent: 'start',display:'flex',borderRadius:'5%',backgroundColor:"#F0F8FF"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={12} md={12} alignItems="center" justifyContent = "start" height = {0.3}>
                                <h3>{"說明："}</h3>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} alignItems="center" justifyContent = "start" height = {0.7}>
                                <p>{"這裡是分享牌組的地方，登入過後的用戶可以在這裡分享自己推薦的牌組喔"}</p>
                                <p>{"注：目前至支援指定模式的牌組分享！！"}</p>
                            </Grid>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'7%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                        </Grid>
                        <Grid sx={{ width: '67%', height :'20%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
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
                            <Grid sx={{ width: '70%', height :'20%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            </Grid>
                            <Grid item xs={4} sm={8} md={12} height ={0.02} alignItems="center">
                                <Stack spacing={2} alignItems="center" height="100%">
                                    <Pagination count={10} page ={page} onChange = {handleChange}/>
                                </Stack>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Box>
            <Foot/>
        </>

  	);
}

export default Decks;