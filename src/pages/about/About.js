import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


export default function About() {
    const theme = useTheme()
    return (
        <>
            <Box style={{ padding: '50px', marginTop: '50px', height: '100vh', backgroundColor: theme.palette.lightGreen.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h3'>
                    👋 Hello there! I'm Jon, a passionate and dedicated junior developer eager to expand my skills and knowledge in the world of software development.
                    </Typography>
            </Box>
            <Box style={{ padding: '50px', height: '100vh', backgroundColor: theme.palette.brown.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h3' color='white'>
                    🌱 I have a strong foundation in JavaScript and React, and I'm always eager to learn and explore new technologies to enhance my capabilities as a developer.
                    </Typography>
            </Box>
            <Box style={{ padding: '50px', height: '100vh', backgroundColor: theme.palette.oliveGreen.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h3'>
                    🚀 I believe in continuous learning and personal growth, and I am committed to staying up to date with the latest industry trends and best practices. I am a firm believer in the power of teamwork and enjoy collaborating with others to create innovative and impactful solutions.
                    </Typography>
            </Box>
            <Box style={{ padding: '50px', height: '100vh', backgroundColor: theme.palette.orange.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h3'>
                    💡 On my GitHub, you'll find a collection of my projects that showcase my skills, creativity, and problem-solving abilities. I am open to feedback and always striving to improve, so feel free to explore my repositories and provide any suggestions or insights.
                    </Typography>
            </Box>
            <Box style={{ padding: '50px', height: '100vh', backgroundColor: theme.palette.offWhite.main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h3'>
                    💡 On my GitHub, you'll find a collection of my projects that showcase my skills, creativity, and problem-solving abilities. I am open to feedback and always striving to improve, so feel free to explore my repositories and provide any suggestions or insights.
                    </Typography>
            </Box>
        </>
    )
}

/*

          🌱 I have a strong foundation in JavaScript and React, and I'm always eager to learn and explore new technologies to enhance my capabilities as a developer.

          💼 Currently, I am seeking opportunities to work on exciting projects and contribute to a collaborative team. I am open to both full-time positions and freelance work, as my main focus is on gaining practical experience and sharpening my problem-solving abilities.

          🚀 I believe in continuous learning and personal growth, and I am committed to staying up to date with the latest industry trends and best practices. I am a firm believer in the power of teamwork and enjoy collaborating with others to create innovative and impactful solutions.

          💡 On my GitHub, you'll find a collection of my projects that showcase my skills, creativity, and problem-solving abilities. I am open to feedback and always striving to improve, so feel free to explore my repositories and provide any suggestions or insights.

          📫 If you're interested in collaborating, have any questions, or simply want to connect, please don't hesitate to reach out to me. I'm excited to be a part of the developer community and contribute to meaningful projects that make a difference.

          Let's connect and create something awesome together! 🌟

*/