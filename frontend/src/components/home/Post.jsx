import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Post({post}) {
    const classes = useStyles();

  

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Bank Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {post.length === 0 ? <div>empty </div>  :
                        post.map((eachPost) => (
                        <TableRow key={eachPost.name}>
                            <TableCell component="th" scope="row">
                                {eachPost.name}
                            </TableCell>
                            <TableCell>
                            <Button variant="contained" color="primary">
                                EDIT
                            </Button> <br/><br/>
                            <Button variant="contained" color="primary">
                                DELETE
                            </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
