import HeadNav from "../components/HeadNav";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Body = styled(Box)
`
display: "flex";
align-content: "center";
justify-content: "center";

`



function Foot() {

	return (
    	<footer>
            <Box
            sx = {{
                backgroundColor: 'grey',
                display: "flex",
                justifyContent: 'center',
                alignContent: "center",
                width: '100%',
                height: '15vh',
                margin: 0,
            }}
            >
                <p className="footer-bottom-text"> ©SV-ToolBox. All Rights Reserved! · version: v0.9</p>
            </Box>
        </footer>

  	);
}

export default Foot;