import React,{useState} from 'react'
import {FaAlignJustify} from "react-icons/fa";
import {Link} from "react-router-dom"

function NavBar() {
    const [state,setState]=useState(true)
    return (
        <nav className='navbar' style={{background:"#F6B8B8"}}>
            <div className='container'>
                <div className='navbar__container'>

                <ul className='navbar__left'></ul>
                {state ?( 
                    <ul className="navbar__right">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/expirience">Expirience</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    
                  </ul>
                ):("")}
                <div className ="toggle" onClick={()=>setState(!state)}>
            <FaAlignJustify />
            </div>
            </div>
            
            </div>
        </nav>
    )
}

export default NavBar
