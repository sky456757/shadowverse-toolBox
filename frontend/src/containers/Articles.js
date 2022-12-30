import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination'
import ArticleCard from "../components/ArticleCardLong";
import { useNavigate } from "react-router-dom";
import AddCardIcon from '@mui/icons-material/AddCard';
import Stack from '@mui/material/Stack';
import Foot from "../components/Foot";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const displayTitle = (T) =>
  (
      <Grid sx={{ width: '70%', height :'9vh',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={3} sm={3} md={4} alignItems="center" justifyContent = "center" height = {1}>
          
          </Grid>
          <Grid item xs={3} sm={3} md={4} alignItems="center" justifyContent = "center" textAlign="center" height = {1}>
                <h1>{T}</h1>
          </Grid>
          <Grid item xs={3} sm={3} md={4} alignItems="center" justifyContent = "center" textAlign="center" height = {1}>
          </Grid>
      </Grid>
  )
function Articles() {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
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
                        {displayTitle("文章分享區")}
                        <Grid sx={{ width: '70%', height :'5%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'5%',alignContent: "center",alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            <Grid item xs={3} sm={3} md={7} alignItems="center" justifyContent = "center" height = {1}>

                            </Grid>
                            <Stack spacing={2} direction="row">
                                <Button onClick={()=> navigate('/articles/send')}   variant="outlined" color="success" endIcon={<AddCardIcon />}>撰寫文章</Button>
                            </Stack>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'20%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "center" height = "0.8">
                                <ArticleCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "center" height = "0.8">
                                <ArticleCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "center" height = "0.8">
                                <ArticleCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "center" height = "0.8">
                                <ArticleCard/>
                            </Grid>
                            <Grid item xs={3} sm={3} md={10} alignItems="center" justifyContent = "center" height = "0.8">
                                <ArticleCard/>
                            </Grid>
                            <Grid sx={{ width: '70%', height :'30%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            </Grid>
                            <Grid item xs={4} sm={8} md={12} height ={0.02} width ={1} alignItems="center">
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

export default Articles;