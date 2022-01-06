import React,{useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Programming from '../programming/programming'
import Expirience from '../expirience/expirience';
import { Button } from '@material-ui/core';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Project from '../../projects/project';
import image from "../images/main.jpg"


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

function ListItemLink(props){
    return<ListItem button component="a"{...props}/>
}

function About() {
    const classes=useStyles();


    const [header]=useState({
        subHeader:"about me",
        text:"hello there... my name is winfred kagendo..i  develop high quality web application at an affordable price.i love being a sofware developer"
    })
    const [state]=useState([
        {id:1,title:"name",text:"WINFRED KAGENDO"},
        {id:2,title:"email",text:"winniekagendo35@gmail.com"},
        {id:3,title:"phone",text:"+254748672162"},
        {id:4,title:"LinkedIn",text:""}
    ])
    return (
        <div className='about'>
            <div className ="container">

                <div className='common'>
                {/* <h1 className='mainHeader'>{header.subHeader}</h1> */}
                {/* <p className='mainContent'>{header.text}</p> */}
                {/* <div className='commonBorder'></div> */}

                <div className='col-6'>
                    <div className='about__info'>
                        <Card style={{width:'100%'}}>
                            <CardContent>
                            <h2>Hello, my name is <span className={classes.brand}>Winfred Kagendo</span></h2>
                            <Typography className={classes.pos}>
                            i am a software developer and a machine learning enthusisast from Kenya.
                            </Typography>
                            <Typography>
                                I find pride in developing high quality  and secure softwares
                            </Typography>
                            
                            </CardContent>
                            <Typography>
                                To see my   cv click on the button below .
                            </Typography>
                            <CardActions >
               <a className="link" style={{background:'#FF8000'}} target="_blank" href="https://docs.google.com/document/d/1enL-1keh_6cdlGp_tdYLi-TBj1ydCmOeUS4IUz2jZPY"> <Button variant="outlined">View CV</Button></a>

                </CardActions>
                        </Card>
                        <h1>hello once more</h1>
                        <div className='about__info-p1' >
                            i studied bachelor of technology computer technology and also did cisco 1 at kenyatta University.
                            I am passionate about my work and i love offering quality services.
                            i have 2+ years of expirience in software development(web app development)   
                        </div>
                        <div className='about__info-p1'>
                        I focus on node js ,react js,mongo db,mysql,python and data science

                        </div>
                        <div className='info__contants'>
                            <div className='row'>
                                {state.map((info)=>(
                                    <div className='col-6'>
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            <div className='row h650 alignCenter'>
                <div className='col-5'>
                    <div className='about-img'  style={{objectPosition:"left"}}>
                    <img src={image} alt="i am a smart competitive developer" />
                    </div>

                </div>
                
            </div>

            </div>
            <Card style={{background:'#AC66CC', marginLeft:"15%",marginRight:"5%",
            borderstyle: "solid",borderWidth: "2px" ,borderColor:"#000000",float:"left"}}>
                <Typography>to  view my expirience,click the button below</Typography>
                <CardActions >
               <a className="link" style={{background:'#FF8000'}} target="_blank" href="/expirience"> 
               <Button variant="outlined">Go to Skills</Button></a>

                </CardActions>
                

            </Card>

            <Card style={{background:'#AC66CC', marginLeft:"50%",marginRight:"15%",justifyContent:"center",alignContent:"center",
            borderstyle: "solid",borderWidth: "2px" ,borderColor:"#000000"}}>
                <Typography>to view  contact,click the button below</Typography>
                <CardActions >
               <a className="link" style={{background:'#FF8000'}} target="_blank" href="/contact"> 
               <Button variant="outlined">Go to contacts</Button></a>

                </CardActions>
            </Card>
            
        </div>
    )
}

export default About
