import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import './programming.css';
import Divider from '@material-ui/core/Divider';

export class Programming extends Component {
    render() {
        const style={
            width:'100%',
            display:"inline-block",
            background:"#263238"
        };
        return (
            <div className="programming">

                <div className='container'>
                    <h2 className='sub-heading'>programming
                    <span className='title'>skills</span> 
                    <Divider variant="middle" /></h2>
                </div>
                <div className='programming-console'>
                    <Paper zDepth={3} style={style}>
                        <div className='console-header'>
                            <div className="console-buttons btn-1"></div>
                            <div className="console-buttons btn-2"></div>
                            <div className="console-buttons btn-3"></div>
                        
                  
                </div>
                <div className='console-content'>
                    
                    <ul>
                        <li>&lt;
                            <span className='html-1'>html</span>&gt;
                        </li>
                        <li>
                        <ul className="no-top-padding">
                        <li>&lt;
                            <span className='html-1'>head</span>&gt;
                        </li>
                            
                            <li>&lt;
                            <span className='html-1'>body</span>&gt;
                        </li>
                        <li>
                        <ul className="no-top-padding">
                        <li>&lt;
                            <span className='html-1'>ul</span>&gt;
                        </li> 
                            <ul className='no-top-padding'>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">JavaScript</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">ReactJS</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">NodeJS</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">python</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">html5</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">redux</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">bootstrap5</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
                                <li>
                                    &lt;<span className="html-1">li</span>&gt;
                                    <span className="html-2">css3</span>
                                    &lt;/<span className="html-1">li</span>&gt;
                                </li>
 


                            </ul>   
                             <li>&lt;/<span className="html-1">ul</span>&gt;</li>    
                        </ul>
                        </li>
                        <li>&lt;/<span className="html-1">ul</span>&gt;</li>
                    </ul>
                    </li>
                    <li>&lt;/<span className="html-1">ul</span>&gt;</li>

                            
                        
                    </ul> 
                </div>
                </Paper>
                </div>

            </div>
        )
    }
}

export default Programming
