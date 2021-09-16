import React,{useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



const ValidationTextFields = () => {
  const classes = useStyles();
  return (
      

    <form className={classes.root} noValidate autoComplete="off" >
        <Typography variant="h4" gutterBottom>
        Create a bank
      </Typography>
      <div>
        <TextField id="name" label="Bank Name" name="name" defaultValue="Bank of America" />
        <TextField id="standard-error" label="Interest (%)" defaultValue="2" />
      </div>
      <div>
        <TextField id="standard-error" label="Maximum Loan ($)" defaultValue="1000" />
        <TextField id="standard-error" label="Minimum Downpayment($)" defaultValue="300" />
      </div>
      <div>
        <TextField id="standard-error" label="Loan Term (No. of months)" defaultValue="5" />
      
      </div>
      <Button variant="contained" color="primary">
        CREATE
      </Button>
    </form>
  );
}

export default ValidationTextFields
