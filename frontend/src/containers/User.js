import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import { useNavigate ,useLocation,useParams} from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Button, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import ArticleCard from "../components/ArticleCard";
import UserTab from "../components/UserTab";
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
  }));


const imglink = "https://store.ymgal.games/archive/main/d5/d5fc5153d78c42d28f29c8bd2132b21d.webp"
function User() {

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
                height: '93vh',
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
                    backgroundColor: 'secondary',
                    justifyContent: 'center',
                }}
                >
                    <Grid sx={{ width: '100%', height :'100%',alignContent: "start",alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid sx={{ width: '70%', height :'77%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 11 }}>
                            <Grid item xs={3} sm={3} md={3} alignItems="center" justifyContent = "center" height = {1}>
                                <Stack spacing={2}>
                                    <Box></Box>
                                    <Item>
                                        <Stack spacing={1}>
                                            <Typography variant="h5" >用戶名</Typography>
                                            <Typography variant="body1" >Rank: Master</Typography>
                                            <Typography variant="body2" >你的自我介紹</Typography>
                                        </Stack>
                                        
                                    </Item>
                                    <Item>
                                        <Stack spacing={1}>
                                            <Typography variant="h6" >撰寫了 x 篇文章</Typography>
                                            <Typography variant="h6" >分享了 x 個牌組</Typography>
                                        </Stack>
                                    </Item>
                                    <Item>
                                        <Stack spacing={1}>
                                            <Typography variant="body1" >UID: 001</Typography>
                                            <Typography variant="body2" textAlign="end">xx/xx/xx 加入</Typography>
                                        </Stack>
                                    </Item>
                                </Stack>
                            </Grid>
                            <Grid item xs={3} sm={3} md={8} alignItems="center" justifyContent = "center" height = {1}>
                                <Stack spacing={2}>
                                    <Box></Box>
                                    <Item>
                                        <UserTab/>
                                    </Item>
                                </Stack>
                            </Grid>
                        </Grid>
        
                    </Grid>
                </Box>
            </Box>
        </>

  	);
}

export default User;