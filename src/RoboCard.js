import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActions , CardContent, CardMedia, Typography, Zoom } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth:250,
    height:320,
    backgroundColor:"#7aebb2",
    borderRadius:4,
    margin:16,
    cursor:'Pointer',
    // '&:hover': {
    //   transform: Zoom(1.5),
    // }
  },
  roboimg: {
    height:200,
    width:200,
  },
  name:{
    fontFamily: "sans-serif , Cantarell",
   textAlign:'center',
   paddingLeft:0,
    fontSize:24,
    fontWeight:'bolder',
    cursor:'initial',
  },
  email:{
    textAlign:'center',
  },
});

export default function RoboCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActions>
          <CardMedia className={classes.roboimg}
          component="img"
          alt="Robot Cartoon"
          image="https://robohash.org/test"
          title="Robot" // title use for what .. why it is in here..???
          />
      </CardActions>
      <CardContent>
      <Typography className={classes.name}>Jone Doe</Typography>
      <Typography className={classes.email}>Jone.Doe@gmail.com</Typography>
      </CardContent>
    </Card>
  );
}



