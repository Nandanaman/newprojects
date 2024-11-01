import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[data,setdata]=useState("");
    var[inp,setInp]=useState(["nandana"]);
    const handleClick=(e)=>{
      setdata(e.target.value)
      console.log (data)
    }
    const add =()=>{
      setInp([...inp,data]);
      console.log(inp)
      setdata("");
    }
  return (
    <div>
        <TextField variant='outlined' value={data} onChange={handleClick} label='enter your name'/><br/><br/>
        <Button variant='contained' onClick={add}>submit</Button>
        <ul>
          {inp.map((v)=>{
            return(
              <li>{v}</li>
            )
          })}
          
        </ul>

    </div>
  )
}

export default Listmap