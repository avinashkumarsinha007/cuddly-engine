import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { LoginContent } from './LoginContent';
import { Register } from './Register';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    height:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius:"13px",
    padding: theme.spacing(2, 4, 3),
    },
    model_login_div: {
        width: "90 %",
        margin:"auto"
    },
    button: {
        marginTop: 20,
        cursor: "pointer",
        background: "silver",
        width: 50,
        padding: 3,
        borderRadius: 4,
        textAlign:"center"
    }
}));

export const SimpleModal=({open,handleClose})=> {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [show, setShow] = React.useState(true);
   
    const toggleShow = () => {
        setShow(!show);
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            {
                show?<LoginContent toggleShow={toggleShow} />:<Register toggleShow={toggleShow}/>
            }
            <SimpleModal />
        </div>
    );
   console.log(open,handleClose)
    return (
        <div>
            <Modal
                open={open}
                onClose={()=>handleClose()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}