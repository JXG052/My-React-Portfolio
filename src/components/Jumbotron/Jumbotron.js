import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import { useStyles } from './styles';
import { useTheme } from '@mui/material/styles';
// import profileImage from './profile.png'

const Jumbotron = () => {
    // const classes = useStyles()
    const theme = useTheme();
    const imagePath = process.env.PUBLIC_URL + '/images/' + 'avataaars-transparent.svg'
    return (
        <Box
            sx={{
                padding: '2rem',
                textAlign: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: theme.palette.offWhite.main
            }}
        >
            <img src={imagePath}></img>
            <Typography variant="h1" component="h1" sx={{ color: 'black', marginBottom: '1rem' }}>
                Welcome to My Portfolio
            </Typography>
            
            <Typography variant="h4" component="h2" sx={{ color: 'black', marginBottom: '2rem' }}>
                Showcasing my skills and projects
            </Typography>
            <Button variant="contained" color='lightGreen' sx={{ height: '5%', width: '15%' }}>
                <Typography variant="h6">View Portfolio</Typography>
            </Button>
        </Box>
    );
};  

export default Jumbotron;
