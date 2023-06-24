import React from 'react';
import ProjectItem from '../../components/ProjectItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Typography } from '@mui/material';

function Portfolio() {
  const projects = [
    {
      title: 'The Golf Group',
      description: 'App that tracks golf progress between friends',
      image: 'theGolfGroup.png'
    },
    {
      title: 'PG Paints',
      description: 'E-commerce platform selling the art of upcoming artist Phil Green',
      image: 'pgPaint.png'
    },
    {
      title: 'Globey',
      description: 'App to help children learn about different countries',
      image: 'globey.png'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <Typography variant='h3'> Here's some of the projects I have worked on so far


    <Slider {...settings}>
      {projects.map((project, index) => (
        <Grid item key={index} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ProjectItem {...project} />
        </Grid>
      ))}
    </Slider>

      </Typography>
  );
}

export default Portfolio;
