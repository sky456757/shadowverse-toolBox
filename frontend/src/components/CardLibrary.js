import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    alignItems: 'start',
    height : '22vh',
    color: theme.palette.text.secondary,
  }));

const lin =  ["https://shadowverse-portal.com/image/card/phase2/common/C/C_107834020.png","https://shadowverse-portal.com/image/card/phase2/common/C/C_115814010.png?202211181636"]
function CardLibrary() {
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const handleOpen = (ind) => 
    {
        setOpen(true);
        
        //alert(ind);
    }
    const handleClose = () => setOpen(false);
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
            <Box sx={{ flexGrow: 1 ,height :'100%',width:'100%',display: { xs: 'none', md: 'flex' }, alignItems: "end",justifyContent: 'center'}}>
                <Grid sx={{ width: '72%', height :'100%',alignItems: "space-around",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={4} sm={8} md={12} backgroundColor = "#F5F5F5" height ={0.05} width = '100%'alignItems="center" justifyContent = "center" m={0} borderRadius = "3%">
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent = "center" height = "100%">
                        <Autocomplete
                        disablePortal
                        id="cost-box"
                        options={cost}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="費用" />}
                        />
                        <Autocomplete
                        disablePortal
                        id="craft-box"
                        options={craft}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="職業" />}
                        />
                        <Autocomplete
                        disablePortal
                        id="rare-box"
                        options={rare}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="稀有度" />}
                        />
                    </Stack>
                  </Grid>
                    {Array.from(Array(48)).map
                    (
                        (_, index) => 
                        (
                            <Grid item xs={2} sm={4} md={2} key={index}>
                                <Item>
                                    <Button onClick = {(index) => handleOpen(index)}>
                                        <Box
                                        component="img"
                                        sx={{
                                        height: '100%',
                                        width: '100%',
                                        cursor: 'pointer',
                                        }}
                                        src= {lin[page%2]}
                                        />
                                    </Button>
                                    
                                </Item>
                            </Grid>
                        )
                    )}
                    <Grid item xs={4} sm={8} md={12} height ={0.02} alignItems="center">
                      <Stack spacing={2} alignItems="center" height="100%">
                          <Pagination count={10} page ={page} onChange = {handleChange}/>
                      </Stack>
                    </Grid>
                </Grid>
            </Box>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction="row" spacing={2}>
                        <Box
                            component="img"
                            sx={{
                            height: '50%',
                            width: '50%',
                            cursor: 'pointer',
                            }}
                            src= {lin[0]}
                        />
                        <Item>
                            <Stack  spacing={2}>
                                <h3>卡名</h3>
                                <p>----------------------------------</p>
                                <p>職業 類型...</p>
                                <p>職業 類型...</p>
                            </Stack>
                        </Item>
                    </Stack>
                    
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        卡片效果:測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試
                    </Typography>
                </Box>
            </Modal>
        </>

  	);
}
const cost = [0,1,2,3,4,5,6,7,8,9,"10+"]
const rare = ["青銅","白銀","黃金","傳說"]
const craft = ["精靈","皇家護衛","巫師","龍族","死靈法師","吸血鬼","主教","復仇者"]
  
export default CardLibrary;
