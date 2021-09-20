import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { SimpleModal } from './Login';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    },
  appBar: {
      background:"hotpink"
    },
  menu: {
      marginTop:"30px"
    },
    topography1: {
      cursor:"pointer"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
   
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };
   
  const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}                 
            <Typography className={classes.topography1} onClick={handleClick} >
                 Shop       
            </Typography>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose1}
        className={classes.menu}              
      >
        <MenuItem onClick={handleClose1}>Manga</MenuItem>
        <MenuItem onClick={handleClose1}>My account</MenuItem>
        <MenuItem onClick={handleClose1}>Story</MenuItem>
        </Menu>
          <Typography variant="h5" className={classes.title}>
            Manga page
          </Typography>
                  <Button color="inherit" onClick={handleOpen} >
                     Login
                  </Button>
                  <SimpleModal handleClose={handleClose} open={open}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}