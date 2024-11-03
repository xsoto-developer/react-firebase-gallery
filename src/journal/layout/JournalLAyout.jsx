import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../component';

const drawerWith = 280;

export const JournalLAyout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
            <NavBar drawerWith={drawerWith} />

            <SideBar drawerWith={drawerWith} />

            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}

            </Box>
        </Box>
    )
}
