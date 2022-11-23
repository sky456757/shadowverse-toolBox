import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import Foot from "../components/Foot";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    height : '33vh',
    color: theme.palette.text.secondary,
  }));


function CardLibrary() {
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
            <Box sx={{ flexGrow: 1}}>
                <Grid sx={{ width: '100%', alignItems: "space-around",justifyContent: 'space-around',}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} m ={1}>
                    {Array.from(Array(48)).map
                    (
                        (_, index) => 
                        (
                            <Grid item xs={2} sm={4} md={2} key={index}>
                                <Item>
                                    <Box
                                    component="img"
                                    sx={{
                                    height: '100%',
                                    width: '100%',
                                    }}
                                    src="https://shadowverse-portal.com/image/card/phase2/common/C/C_107834020.png"
                                    />
                                </Item>
                            </Grid>
                        )
                    )}
                    <Stack spacing={2} alignItems="center">
                        <Pagination count={10} page ={page} onChange = {handleChange}/>
                    </Stack>
                </Grid>
            </Box>
        </>

  	);
}

export default CardLibrary;