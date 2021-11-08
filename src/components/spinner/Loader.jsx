import React from 'react'
import Box from '@mui/material/Box'
import {CircularProgress} from '@mui/material'


export const Loader = () => {
    const styles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
    }
    return (
        <Box sx={styles}>
            <CircularProgress/>
        </Box>
    )
}

