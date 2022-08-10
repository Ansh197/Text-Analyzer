import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [original, altered] = useState("");
  const [count,setcount] = useState(0);
  const [space,setspace] = useState(0);
  const [original2, altered2]= useState("");
  const [wordcount, setword] = useState(0)
  const changetext = (event) => {
    altered(event.target.value);
    let a = event.target.value ;
    let b=0,c=0;
    for (let i = 0; i < a.length; ) {
      if (a.charAt(i) === " ") {
        while (a.charAt(i) === " " && i < a.length) {
          ++i;
          ++c;
        }
      } else {
        while (a.charAt(i) !== " " && i < a.length) {
          ++i;
        }
        ++b;
      }
    }
    setspace(c);
    setcount(b);
  };

  const changetext2 = (temp) => {
    altered2(temp.target.value);
    if(temp.target.value==="")
    {
      setword(0);
      return ;
    }
    let a=original;
    let b=temp.target.value;
    let r=0;
    let i=0;
    while(i<a.length)
    {
      let x="";
      while(i<a.length&&a.charAt(i)===' ')
      {
        ++i;
      }
      while(i<a.length&&a.charAt(i)!==' ')
      {
        x=x+a[i];
        ++i;
      }
      if(x===b)
      {
        ++r;
      }
    }
    setword(r);
  }

  const uppercase = () => {
    let newtext = original.toUpperCase();
    altered(newtext);
  };
  const lowercase = () => {
    let newtext = original.toLowerCase();
    altered(newtext);
  };
  const capitalize = () =>
  {
    let b=original;
    let c="";
    let i=0;
    while(i<b.length)
    {
      let a="";
      while(i<b.length&&b.charAt(i)===' ')
      {
        c=c+" ";
        ++i;
      }
      while(i<b.length&&b.charAt(i)!==' ')
      {
        a=a+b[i];
        ++i;
      }
      a=a.charAt(0).toUpperCase()+a.slice(1);
      c=c+a;
    }
    altered(c);
  }; 
  const cleartext = () =>
  {
    altered("");
    setcount(0);
    setspace(0);
  };

  const removespace = () =>{
    let b=original;
    let c="";
    let i=0;
    while(i<b.length)
    {
      let a="";
      while(i<b.length&&b.charAt(i)===' ')
      {
        ++i;
      }
      while(i<b.length&&b.charAt(i)!==' ')
      {
        a=a+b[i];
        ++i;
      }
      c=c+a;
      c=c+" ";
    }
    altered(c);
  };

  return (
    <>
      <div id="form-container">
        <textarea
          className='form'
          placeholder="Enter your text here...."
          name="writing-space"
          value={original}
          onChange={changetext}
          style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`} }
        ></textarea>
        <div className="words-container" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         borderColor : `${props.mode==="Dark"?'black': '#E8E8E8'}`} }>
          <div id="div1" className="word-container-cont">Number Of Characters : {original.length-space}</div>
           <div id="div2" className="word-container-cont">Number Of Words : {count}</div>
           <div id="div2" className="word-container-cont">Number Of Spaces : {space}</div>
           <div id="div2" className="word-container-cont">Occurrence : {wordcount}</div>
            <input className="inputdiv" placeholder="Search a Word" value={original2} onChange={changetext2} />
        </div>
      </div>
      <div id="btn-container">
        <button className="btn" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         border : `1px solid ${props.mode==="Dark"?'black': 'white'}`} }
         onClick={uppercase}>
          Uppercase
        </button>
        <button className="btn" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         border : `1px solid ${props.mode==="Dark"?'black': 'white'}`} }
         onClick={lowercase}>
          Lowercase
        </button>
        <button className="btn" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         border : `1px solid ${props.mode==="Dark"?'black': 'white'}`} }
         onClick={cleartext}>
          Clear Text
        </button>
        <button className="btn" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         border : `1px solid ${props.mode==="Dark"?'black': 'white'}`} }
         onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn" style= {{color: `${props.mode==="Dark"?'black':'white'}`,
         backgroundColor : `${props.mode==="Dark"?'rgb(234, 232, 232)': 'rgb(41, 41, 41)'}`,
         border : `1px solid ${props.mode==="Dark"?'black': 'white'}`} }
         onClick={removespace}>
          Remove Space
        </button>
      </div>
    </>
  );
}
