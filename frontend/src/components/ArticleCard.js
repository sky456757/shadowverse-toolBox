import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const imglink = "https://store.ymgal.games/archive/main/d5/d5fc5153d78c42d28f29c8bd2132b21d.webp"
const title = "70%勝率GM，指定棄牌龍"
const content = "文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介"
export default function ArticleCard() {
  return (
    <Card sx={{ maxWidth: 345 ,height:"100%" ,width:"100%",cursor:"pointer",display:'flex',alignItems: "start",justifyContent: 'center'}}>
      <Grid sx={{ width: '100%', height :'100%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 10, sm: 10, md: 12 }}>
            <Grid item xs={3} sm={3} md={4} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardMedia
                component="img"
                height="100%"
                width = "100%"
                image= {imglink}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={3} sm={3} md={8} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {title}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={3} sm={3} md={12} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {content}
                </Typography>
              </CardContent>
            </Grid>
      </Grid>
    </Card>
  );
}