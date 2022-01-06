import { Button } from '@material-ui/core';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import Typography from 'material-ui/styles/typography';
import React,{useState} from 'react'
import {FaFacebookF,FaTwitter,FaPinterest,FaInstagram,FaPlay} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Contact() {
    const [state]=useState([
        {id:1,title:"name",text:"WINFRED KAGENDO"},
        {id:2,title:"email",text:"winniekagendo35@gmail.com"},
        {id:3,title:"phone",text:"+254748672162"},
        {id:4,title:"LinkedIn",text:""}
    ])
    return (

        <div className='about'>
            <div className='container'>
                <div className='contactSection'>
                    <div className='row justifyConter'>
                        <div className='col-6'>
                            <img src='./win.jpg'></img>
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
                        <p>contact  me at the given contact below</p>
                        <ul className='contactCircles'>
                            <li>
                                <FaFacebookF className="contactIcon" />
                            </li>
                            <li>
                                 <FaTwitter className="contactIcon" />
                            </li>
                            <li>
                                <FaPinterest className="contactIcon" />
                            </li>
                            <li>
                  <             FaInstagram className="contactIcon" />
                            </li>
                        </ul>
                    </div>
                </div>
                

            </div>
            <h3 style={{fontWeight:"normal",fontColor:'#FF8000'}}>to go to homepage click <Link to ="/">Here</Link></h3> 
                <h3 style={{fontWeight:"normal",fontColor:'#FF8000'}}>to go to expirience click<Link to="/expirience">HERE</Link></h3>
            
        </div>
    )
}

export default Contact
