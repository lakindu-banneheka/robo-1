import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
  },
  container: {
    display: 'flex',
  },
//   paper: {
//     margin: theme.spacing(1),
//   },
  svg: {
    width: 200,
    height: 200,
  },
//   svg1:{
//     width:300,
//     height:300,
//   }
 
}));

export default function SimpleGrow() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}  /> */}
      <div className={classes.container}>
        
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Paper elevation={4}>
            <svg className={classes.svg}>
            </svg>
          </Paper>
        <Grow
          in={handleChange}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 3000 } : {})}
        >
          <Paper elevation={4}>
            <svg className={classes.svg1}>
            </svg>
          </Paper>
        </Grow>
      </div>







      {/* <Popper id={id} open={open} anchorEl={anchorEl} transition>
  {({ TransitionProps }) => (
    <Fade {...TransitionProps} timeout={350}>
      <div className={classes.paper}>The content of the Popper.</div>
    </Fade>
  )}
</Popper> */}

    </div>
  );
}

