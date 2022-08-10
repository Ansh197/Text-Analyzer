import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Switch from './components/Switch';
import React, {useState} from 'react';
function App() {
  const [mode,setmode] = useState('Dark')
  const [mystyle,setmystyle]= useState(
    {
      backgroundColor: 'rgb(234, 232, 232)',
      height: '88px',
      border: '1px solid black'
    }
  )
  const togglemode = () =>
  {
    if(mode==='Dark')
    {
      document.body.style.backgroundColor=' #131417';
      setmode('Light');
      setmystyle(
        {
          backgroundColor: 'rgb(41, 41, 41)',
          height: '88px',
          borderBottom : '1px solid white'
        }
      )
    }
    else
    {
      document.body.style.backgroundColor='white';
      setmode('Dark');
      setmystyle(
        {
          backgroundColor: 'rgb(234, 232, 232)',
          height: '88px',
          borderBottom: '1px solid black'
        }
      )
    }
  }
  return (
    <>
    <Navbar mode={mode} mystyle={mystyle}/>
    <Switch mode={mode} togglemode={togglemode}/>
    <Form mode={mode}/>
    </>
  );
}

export default App;
