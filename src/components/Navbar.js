import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <>
    <div className='navbar' style={props.mystyle} >
        <div id='title' style={{color : `${props.mode==='Dark'?'black':'white'}`}}>
            Text Analyzer
        </div>
        <div className='nav-right'>
    </div>
    <button id='login' style={{color : `${props.mode==='Dark'?'black':'white'}`,
    backgroundColor :`${props.mode==='Dark'?'rgb(234, 232, 232)':'rgb(41, 41, 41)'}`}
  }>
      Login</button>
    </div>
    </>
  )
}
