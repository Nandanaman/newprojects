import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h6'> APP</Typography>
                <Button variant='contained'>app user</Button>
            </Toolbar>
            
        </AppBar>
        <br/><br/>

    </div>
  )
}

export default Navbar