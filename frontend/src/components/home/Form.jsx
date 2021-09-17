import React,{useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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

  const [post, setPost] = useState({
      name:"",
      interest:0,
      max_loan:0,
      min_down:0
  })



  const createPost = () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
            // "Content-Type": "multipart/form-data"
        }
    }

    const postData = {name:post.name, interest:post.interest, max_loan:post.max_loan,min_down:post.min_down,loan_term:post.loan_term}

    const yet = {
        name:"",
        interest:"",
        max_loan:"",
        min_down:"",
        loan_term:""
    }

    const formData = new FormData()
    formData.append("name", post.name)
    formData.append("interest", post.interest)

    axios.post('http://127.0.0.1:3000/create', postData, config).then(res => {
        let data = res.data.data
        setPost({
            name:data.name,
            interest:data.interest,
            max_loan:data.max_loan,
            min_down:data.min_down,
            loan_term:data.loan_term
        })
        console.log(data)
        console.log("YOU CLICKED BABY")
    }).catch(err => {
        console.log(err)
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    createPost()
    console.log(post, "posty")
  }

  const inputter = (e) => {
      const newData = {...post}
      newData[e.target.id] = e.target.value 
      setPost(newData)
  }

  return (
      
    <div>
        <Typography variant="h4" gutterBottom>
        Create a bank
      </Typography>
        <form className={classes.root} noValidate autoComplete="off"  >
        
      <div>
        <TextField id="name" label="Bank Name" value={post.name}  onChange={(e) => inputter(e)} />
        <TextField id="interest" label="Interest (%)"  value={post.interest}  onChange={(e) => inputter(e)} />
      </div>
      <div>
        <TextField id="max_loan" label="Maximum Loan ($)" name="max_loan" value={post.max_loan}  onChange={(e) => inputter(e)} />
        <TextField  id="min_down" label="Minimum Downpayment($)" name="min_down" value={post.min_down}  onChange={(e) => inputter(e)} />
      </div>
      <div>
        <TextField id="standard-error" label="Loan Term (No. of months)" defaultValue="5"  />
      
      </div>
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
        CREATE
      </Button>
    </form>
    </div>
    
  );
}

export default ValidationTextFields
