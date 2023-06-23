import React from 'react'
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material'


// For each individual project to be displayed in the portfolio section
export default function ProjectItem({ title, description, image }) {
    const imagePath = process.env.PUBLIC_URL + '/images/' + image
    return (
        <Card>
            <CardActionArea>
                <img src={imagePath} alt={title} />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
