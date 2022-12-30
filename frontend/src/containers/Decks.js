import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Foot from "../components/Foot";
import Button from '@mui/material/Button';
import DeckCard from "../components/DeckCard";
import Pagination from '@mui/material/Pagination'
import AddCardIcon from '@mui/icons-material/AddCard';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: "100%",

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
    const navigate = useNavigate();
    const handleChange = (event, value) => {
        setPage(value);
        //alert(value)
    };
    const [open, setOpen] = useState(false);
    const handleOpen = (ind) => 
    {
        setOpen(true);
        
        //alert(ind);
    }
    const handleClose = () => setOpen(false);
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
                height: '110vh',
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
                        <Grid sx={{ width: '67%', height :'15%',alignContent: "start",alignItems: "start",justifyContent: 'start',display:'flex',borderRadius:'5%',backgroundColor:"#F0F8FF"}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid item xs={12} sm={12} md={12} alignContent="start" alignItems="start" justifyContent = "start" height = {0.3}>
                                <h3>{"說明："}</h3>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} alignContent="start" alignItems="start" justifyContent = "start" height = {0.7}>
                                <p>{"這裡是分享牌組的地方，登入過後的用戶可以在這裡分享自己推薦的牌組喔"}</p>
                                <p>{"注：目前至支援指定模式的牌組分享！！"}</p>
                            </Grid>
                        </Grid>
                        <Grid sx={{ width: '70%', height :'12%',alignContent: "center",alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            <Grid item xs={3} sm={3} md={7} alignItems="center" justifyContent = "center" height = {1}>

                            </Grid>
                            <Stack spacing={2} direction="row">
                                <Button onClick={()=> navigate('/decks/send')}  size="large" variant="outlined" color="success" endIcon={<AddCardIcon />}>分享牌組</Button>
                            </Stack>
                        </Grid>
                        <Grid sx={{ width: '67%', height :'20%',alignItems: "center",justifyContent: 'start',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
                            {
                                [0,0,0,0,0,0,0,0,0,0,0,0,0].map(() =>(
                                    <Grid item xs={3} sm={3} md={2} alignItems="center" justifyContent = "center" >
                                        <Button onClick = {() => handleOpen()}> 
                                            <DeckCard/>
                                        </Button>
                                    </Grid>
                                ))
                            } 
                            
                            
                            
                            <Grid sx={{ width: '70%', height :'1%',alignItems: "start",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 10, sm: 10, md: 10 }}>
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
                                    <Item>
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
                                    </Item>
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

export default Decks;