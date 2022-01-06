import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Programming from './programming/programming'
import Expirience from './expirience/expirience';
import Project from '../projects/project';
import Card from 'material-ui/Card';
import Typography from 'material-ui/styles/typography';
import CardActions from 'material-ui/Card/CardActions';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      padding:25,
    },
   
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 24,
    },
    brand:{
      color:'#FF8000',
      fontWeight:500,
    },
    pos: {
      marginBottom: 12,
    },
    padding:{
      padding:27,
    },
    button :{
        color:'#FF8000'

    },
    
    
  }));
  
function Skill() {
  const classes = useStyles();
    return (
      <div className='about'>
      <div className={classes.padding}>
        <Programming/>

        <Expirience/>
               
      <Project/>

     <h3 style={{fontWeight:"normal",fontColor:'#FF8000'}}>to go to homepage click <Link to ="/">Here</Link></h3> 
     <h3 style={{fontWeight:"normal",fontColor:'#FF8000'}}>to go to contacts click<Link to="/contact">HERE</Link></h3>
</div>

</div>
    )
}

export default Skill
