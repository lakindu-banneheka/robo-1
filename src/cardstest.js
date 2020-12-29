import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActions , CardContent, CardMedia, Typography,  } from '@material-ui/core';
import './css/Robcard.css'


const useStyles = makeStyles({
  root: {
    maxWidth:250,
    height:320,
    backgroundColor:"#7aebb2",
    transform:5000,
    flexGrow: 1,
    borderRadius:4,
    margin:10,
    border:10,
    padding:0,
    cursor:'Pointer',
    display:'inline-block',
    '&:hover': {
      shadows:12,
      

    }
  },
  roboImage: {
    height:200,
    width:200,
    // Boxalign:'center',
  },
  name:{
    // fontFamily: "sans-serif , Cantarell",
    textAlign:'center',
    fontSize:24,
    fontWeight:'bolder',
    
  },
  email:{
    textAlign:'center',
  },
});

export default function RoboCard() {
  const classes = useStyles();
  return (
          
            <Card className={classes.root} >
            {/* className="card" */}
      <CardActions>
          <CardMedia className={classes.roboImage}
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



