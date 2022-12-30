import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const imglink = "https://cdn.jsdelivr.net/gh/sky456757/imgHost@latest/img/random/05.png"
const title = "70%勝率GM，指定棄牌龍"
const content = "文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介文章簡介"
export default function ArticleCard() {
  return (
    <Card sx={{ maxWidth: 345 ,height:"100%" ,width:"100%",cursor:"pointer",display:'flex',alignItems: "start",justifyContent: 'center'}}>
      <Grid sx={{ width: '100%', height :'100%',alignItems: "center",justifyContent: 'center',display:'flex'}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={4} sm={4} md={4} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardMedia
                component="img"
                height="100%"
                width = "100%"
                image= {imglink}
                alt="cover img"
              />
            </Grid>
            <Grid item xs={8} sm={8} md={8} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {title}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={12} md={12} alignItems="center" justifyContent = "center" height = {0.5}>
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  {content}
                </Typography>
              </CardContent>
            </Grid>
      </Grid>
    </Card>
  );
}