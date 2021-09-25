import React from 'react'
import { useStyles } from './styles'
import { Typography } from '@mui/material'

const About = () => {

    const classes = useStyles()

    return (
        <div style={{marginTop:'30px'}}>
        <Typography component="div" style={{textAlign:'center'}}>
            ABOUT US
            </Typography>
        <div className={classes.About}>
          <div >
          <img
          style={{ width: "500px", height: "300px"}}
          alt="stock"
          src="https://cdn.pixabay.com/photo/2014/09/04/11/03/supermarket-435452_960_720.jpg"
        />
          </div>
          <div className={classes.aboutDescription} >
             <p >
             What is Lorem Ipsum?
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
             </p>
          </div>
            </div>
        </div>
    )
}

export default About
