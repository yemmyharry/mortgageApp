import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from "axios"

import Form from './Form'
import Post from './Post'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [post, setPost] = useState([{
    name:""
}])

const createPost = () => {

  axios.post("http://localhost:3000/create", {name: "ameriaca"}).then(res => {
      let data = res.data.data
      setPost(data)
      // console.log(data)
  }).catch(err => {
      console.log(err)
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  createPost()

}

  const GetBanks = () => {
      axios.get("http://localhost:3000/").then(res => {
          let data = res.data.data
          setPost(data)
          console.log(data)
      }).catch(err => {
          console.log(err)
      })
  }

  useEffect(() => {
      GetBanks()
      //eslint-disable-next-line
  }, [])


  return (
    <div className={classes.root}>
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
               <Post post={post}/>
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Form/>
    
          </Paper>
        </Grid>
   
      </Grid>
    </div>
  );
}
