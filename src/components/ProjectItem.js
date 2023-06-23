import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

export default function ProjectItem() {
    return (
        <Card>
            <CardActionArea>
                <img src={image} alt={title} />
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
