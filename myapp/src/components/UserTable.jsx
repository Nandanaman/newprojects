import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';


const UserTable = () => {
    var[user,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
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
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">city</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {user.map((val)=>{
                return(
                    <TableRow>       
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell>{val.address.city}</TableCell>
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

export default UserTable