import React, { Component } from 'react'
import './project.css'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        overflow:"hidden",
        padding:10,
    },
    paper:{
        padding:theme.spacing(2),
    },
}));

export default function Project() {
    const classes=useStyles()
    
        return (
            <div className={classes.root}>
                <div className='container'>
                    <h2 className="sub-heading">projects<span className='title'>summary</span><Divider variant="middle" /></h2>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <h2>SmartPark System</h2>
                                <Typography>
                                    smart park is an iot based web application designed to ease the process of finding free parking spaces.
                                    Sensors detect whether o not a parking space is occupied and the data is displayed on the web applications homepage.
                                    The driver logs in to the system and  athen selects a free parking space.
                                    they are then presented with a map showing the direction to the free parking space.
                                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <h2>personal portfolio</h2>
                                <Typography>
                                    this is a react web application that gives more informatiom about myself projects i have done and ways to contact me.
                                    In addition they give  the services I offer 
                                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <h2>Sound classification</h2>
                                <Typography>
                                    This is a machine learning project with html and css and js for my fe and flask application for my bacend
                                    The project uses fully convolutionary networks to train  soundmodels which are then used to classify sounds as danger sounds or not danger sounds.
                                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

                




                
            </div>
        )
    
}
