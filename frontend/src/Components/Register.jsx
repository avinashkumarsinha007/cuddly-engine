import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 


const useStyles = makeStyles((theme) => ({
      model_login_div: {
          width: "90 %",
          margin:"auto"
      },
      button: {
          marginTop: 20,
          cursor: "pointer",
          background: "silver",
          width: 80,
          padding: 3,
          borderRadius: 4,
          textAlign:"center"
      }
  }));
export const Register = ({toggleShow}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.model_login_div}>
            <form>
                <br/>
                <TextField id="standard-basic" label="Name" fullWidth /><br/>
                <TextField id="standard-basic" label="Email" fullWidth /><br/>
                <TextField id="standard-basic" label="Password" fullWidth />
            </form>
            <div className={classes.button} type="button" >
                Register
            </div>
            <div style={{marginTop:20}}>  
                <span> Already registered? please </span>
                <span className={classes.button} onClick={toggleShow} type="button" >
                Login
                </span>
            </div>  
            </div>
        </>
    )
}