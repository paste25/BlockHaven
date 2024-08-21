import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const LoadingBarCircular = () => {
  return (
    <div>
      <Box sx={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ecbe1a"
       }}>
        <CircularProgress color="inherit" />
      </Box>
  </div>
  )
}

export default LoadingBarCircular
