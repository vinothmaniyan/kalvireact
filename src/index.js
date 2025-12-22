import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var sobj={
  rno:1001,
  sname:"vinoth",
  mark:[100,200,300,400],
  rank:1,
  grade:"destinction",
  location:"thenniali",
  issingle:"false",
  aadtharno:900964067414,
  hobbies:{
    hob1:"chess",
    hob2:"travel",
    hob3:"music",
    hob4:"reading book"

  }


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
