import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
const LoadingBarLinear = () => {
  return (
       <Box sx={{ width: '100%',
         color: "#ecbe1a"
        }}>
      <LinearProgress  color="inherit"/>
    </Box>
  )
}

export default LoadingBarLinear
