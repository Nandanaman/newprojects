import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const New = () => {

    var[user,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setUser(response.data)
        console.log(user)
    })
  return (
    <div>
        <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">UserID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val)=>{
                return(
                    <TableRow>       
                    <TableCell>{val.userId}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell>{val.body}</TableCell>
                    </TableRow>
                )
            })
            }
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow>  
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell> 
            </TableRow>   
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default New