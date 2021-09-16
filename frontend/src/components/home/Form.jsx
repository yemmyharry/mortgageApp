import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  const clickHandler = () => {
    axios.get("http://localhost:3000/").then(res => {
        console.log(res.data.data[0])
    }).catch(err => {
        console.log(err)
    })
    }

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h4" gutterBottom>
        Create a bank
      </Typography>
      <div>
        <TextField id="standard-error" label="Bank Name" defaultValue="Bank Of America" />
        <TextField id="standard-error" label="Interest (%)" defaultValue="2" />
      </div>
      <div>
        <TextField id="standard-error" label="Maximum Loan ($)" defaultValue="1000" />
        <TextField id="standard-error" label="Minimum Downpayment($)" defaultValue="300" />
      </div>
      <div>
        <TextField id="standard-error" label="Loan Term (No. of months)" defaultValue="5" />
      
      </div>
      <Button variant="contained" color="primary" onClick={clickHandler}>
        CREATE
      </Button>
    </form>
  );
}
