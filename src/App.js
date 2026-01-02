import {useState}from "react"
function App()
{
  const[city,setCity]=useState("karur")
  const [list,setList]=useState("null")
  const upcity=(event)=>{
    setCity(event.target.value);
  }
  const findweather=()=>{
  console.log("city name:",city);
   var api=(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2c5ca36a9d2965575c74c1f3d36ca74`)
   fetch(api)
   .then((response)=>response.json())
   .then((data)=>{
     console.log(data);
     setList(data)
   })
   .catch((err)=>{
     console.log(""+err)
     setList(err)
   })
  }
   return(
    <>
     <h2><center>Fetch -ApI</center></h2>
     <h2>Weather report</h2>
     <label>Enter City Name</label>
     <input type="text" value={city} onChange={upcity}></input>
     <br></br>
     <input type="button" onClick={findweather} value="GetReport"></input>
     <br></br>
    {list.cod===200 &&
     <>
     <h2>Final Report</h2>
     <h3>Main Report:{list !==null && list.weather[0].main}</h3>
     <h3>Description:{list !==null && list.weather[0].description}</h3>
     <h3>Wind Speed:{list !==null && list.wind.speed}</h3>
     <h3>Temprature:{list !==null &&  list.main.temp}</h3>
     <h3>Humidity :{list  !==null && list.main.humidity}</h3>
     
     </> 
}
{list.cod==="404"&&
<h3>Error Message:{list!==null && list.cod==='404'&& list.message}</h3>
}
</>
     )
}
 export default App
// /import React from 'react'
// import "./App.css"
// function App(){
//   return(
//     <div id="outer" align="center">
//       <div id="inner">
//       <h1>ADMIN PANEL</h1>
//       <input type='text' placeholder='Enter user name'></input>
//       <input type="password" placeholder='Enter password'></input>
//       <p align="right"><button>LOGIN</button></p>
//     </div>
//       </div>
//   )
// }
// export default App
// // import React from 'react'
// // import { useEffect } from 'react'
// // // rompa mukiyam paduchukol
// // const App=()=>{
// //   useEffect(()=>{
// //     document.title=`vinoth`
// //   })
// //   return(
// //     <div>
// //       <h1>useEffect hook</h1>
// //       </div>
// //   )

// // }
// //  export default App

// // import { useState } from 'react'
// // import React from 'react'
// // function App(){
// //   const[count,setCount]=useState(0)
// //   const handleClick =()=>{
// //     setCount(count+1)
// //   }
// //   return(
// //     <>
// //     <button onClick={handleClick}>button clicked</button>
// //  {count}
// //     </>
  
      

    
// //   )
// // }
// //   export default App
// // import {useState} from 'react'
// // function App(){
// //   const[count,setCount]=useState(100)
// //   const show=(event)=>{
// //     if(event.target.id==="b1")
// //     setCount(count+1)
// //     if(event.target.id==="b2")
// //     setCount(count-1)
// //   }


// //   return(
// //     <>
// //     <button id="b1" onClick={show}>Increment By</button>
// //     <button id="b2" onClick={show}>Decrmemnt BY</button>
// //       <div>
// //         {count}
// //       </div>
// //     </>
    
  
    
// //   )
// // }
// // export default App

//   // ithu oru mathod function two open panni potrathu
// // import {useState}from 'react'
// // // 
// // function App()
// // {
// //   const[count,setCount]=useState(100)
// //   const show1=(event)=>{
// //     setCount(count+1)
// //   }
// //   const show2=(event)=>{
// //     setCount(count-1)
// //   }
// //   return(
// //     <>
// //      <button onClick={show1}>Increment By1</button>
// //      <button onClick={show2}>Decrement By 2</button>
// //      <>
     
// //      </>
// //      {count}
     
// //     </>

// //   )

// // }
// // export default App
// // /*import {useState} from 'react'
// // import React from 'react'
// // // use state apdinkirathu hooks ihtu set pantrathukaka
// // // rafc kudutha format varum ithu rompa mukiyam epdiyachu paduchuru ithu hooks nu soluanga
// // // ithula argument pass pannala
// // const App=()=>{
// //   const [name,setName]=useState("----")
// //   const dis=(event)=>{
// //     setName(event.target.value)
// //   }
// //   // ithuku per argument pass pantrathu
// //    const show=(v)=>{
// //      console.log(v)
// //    }
// //    const find=(v1,v2)=>{
// //      console.log(v1+v2)
// //     // /  12,34 apdinkirathu v1,v2 athunala apdi potrukom
// //    }
// //   return(
// //     <div>
// //       <form>n
// //       <input type="text" value={name} onChange={dis} placeholder="Enter user name"></input><br></br>
      
// //       <input type="password" onChange={()=>show("1234")} placeholder="Enter password"></input><br></br>
       
// //       <input type="number"onChange={()=>find(12,34)} placeholder="Enter account number"></input><br></br>
// //       <br></br>
// //       <input type="email" placeholder="Enter email"></input><br>
// //       </br>
// //       <label>Select Gender:</label>
// //       <input type="radio" name="gen"></input>Male
// //       <input type="radio" name="gen"></input>Female
// //       <input type="radio"name="gen"></input>Others
// //       <br></br>
// //       <label>Select Course:</label>
// //       <input type="checkbox" name="course"></input>Html
// //       <input type="checkbox" name="course"></input>Css
// //       <input type="checkbox" name="course"></input>Javascript
// //       <input type="checkbox" name="course"></input>React
// //       <input type="checkbox" name="course"></input>Non of these above
// //       <br></br>
// //       <select>
// //         <option selected>Select Month</option>
// //         <option>january</option>
// //         <option>February</option>
// //         <option>March</option>
// //         <option>April</option>

// //       </select>
// //       <br></br>
// //      Select Color: <input type="color" name="col"></input>
// //      <br></br>

// //      Select Dob :<input type="date" name="dat"></input>
// //      <br></br>
// //      Select Time:<input type="time" name="time"></input>
// //      <br>
// //      </br>
// //      Select Week:<input type="week" name="week"></input>
// //      <br></br>
// //       <button><b><s>clickme</s></b></button>
// //       <br></br>
// //       Upload Resume:<input type="file"></input>
// //       <br></br>
// //       <label>Type your Address:</label>
// //       <textarea rows="7" cols="25"></textarea>
// //       <br></br>

// //       <label>List box</label>
// //       <select size="4" multiple>
// //         <option>Sunday</option>
// //         <option>Monday</option>
// //         <option>Tuesday</option>
// //         <option>Wednesday</option>
// //         <option>Thursday</option>
// //         <option>Friday</option>
// //         <option>Saturday</option>
// //       </select>
// //       <br>
// //       </br>
// //       <label>Volume</label>
// //       <input type="range" min="0" max="10"></input>
// //       <br></br>
// //       <label>Progress bar:</label>
// //       <progress style={{backgroundColor:"green",border:"2px solid green"}}> min="0" max="70" value="20"</progress>
// //        <br></br>
// //       <input type="submit"></input>
      
     

// //       <input type="button" value="clickme"></input>
// //       <br></br>
     
      

// // </form>
// //       </div>

// //   )
// // }
// // export default App

// // // function App(props)
// // // // data types kandupudikirathu
// // // {
// // //   var a=props.data.rno
// // //   var b=props.data.sname
// // //   var c=props.data.issingle
// // //   var d=props.data.mark
// // //   var e=props.data.hobbies
// // //   return(
// // //     <>
// // //     <h3>type of rno:{typeof(a)}</h3>
// // //     <h3>type of sname:{typeof(b)}</h3>
// // //     <h3>type of marital status:{typeof(c)}</h3>
// // //     <h3>type mark:{typeof(d)}</h3>
// // //     <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
// // //     <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
    

// // //     </>
// // //   )
// // // }
// // // export default App
// // // ithu vanthu function components class  componenets ah vita ithutha analla irukum easy ah purium
// // //  import parse from 'html-react-parser';
// // //  function App(props)
// // //  {
// // //    var ans=""
// // //   for(var s in props.data)
// // //   {
// // //     ans=ans+`<li>${s}=${props.data[s]}</li>`
// // //      console.log(s)

// // // // //   }
// // // // //   return(
// // // // //     <>
// // // // //     {parse("<ol>"+ans+"</ol>")}
// // // // //     </>
// // // // //   )
// // // // // }
// // // // // export default App
// // // // // import React from "react";
// // // // // import parse from 'html-react-parser';
// // // // // class App extends React.Component
// // // // // {
// // // // //   constructor(props)
// // // // //   {
// // // // //     var ans=""
// // // // //     super(props)
// // // // //     for(var s in props.data)
// // // // //   {
// // // // //       ans=ans+`<li>${s} =${props.data[s]}<br></br></li>`
// // // // //       console.log(s)
// // // // //     }
// // // // //     this.state={
// // // // //       res:"<ol type=I>"+ans+"</ol>"
// // // // //     }
// // // // //     // this.state={
// // // // //     //   res:ans
// // // // //     // }
// // // // //   }
// // // // //   render()
// // // // //     {
// // // // //       return(
// // // // //         <>
// // // // //         <h1>compine react state+props</h1>
// // // // //         {parse(this.state.res)}
// // // // //       <div id="res"></div>
// // // // //         </>
// // // // //       )

// // // // //     }
  
// // // // // }
// // // // // export default App
// // // // // import React from "react";
// // // // // class App extends React.Component
// // // // // {
// // // // //   constructor()
// // // // //   {
// // // // //     super()
// // // // //     this.state={
// // // // //       sno:11,
// // // // //       sname:"vinoth",
// // // // //       mark:[77,88,99,100],


// // // // //     }
// // // // //   }
// // // // //   show=()=>{
// // // // //     this.setState({sname:"vinoth M"})
// // // // //   }
// // // // //   dis=()=>{
// // // // //     this.setState({mark:[10,20,30,40]})
// // // // //   }
// // // // //   dis1=()=>{
// // // // //     const newmark=[...this.state.mark]
// // // // //     newmark[3]=100
// // // // //     this.setState({mark:newmark})
// // // // //   }

// // // // //   render()
// // // // //   {
// // // // //     return(
// // // // //       <>
// // // // //       <h1>this is class componenets</h1>
// // // // //       <h2>SerialNumber:{this.state.sno}</h2>
// // // // //       <h2>Student Name:{this.state.sname}</h2>
// // // // //       <h2>Student mark:{this.state.mark}</h2>
// // // // //       {this.state.mark.map(
// // // // //         (v,index)=><>
// // // // //         Mark:{index+1}={v}<br></br>
// // // // //         <button onClick={this.show}>update name</button>
// // // // //         <button onClick={this.dis}>update all mark</button>
// // // // //         <button onClick={this.dis1}>update single mark</button>
// // // // //         </>
// // // // //       )}
// // // // //       </>
// // // // //     )
// // // // //   }
// // // // // }
// // // // // export default App

// // // // // // /* // import { aadhar,accno,place,sname } from "./mycomponents/commonvariabl"
// // // // // // // import Vinoth from "./mycomponents/Vinoth"
// // // // // // // function App(){
// // // // // // //   return(
// // // // // //     <> */  
// // // // // // //        <Vinoth/>
// // // // // // //     <h1>this is default componenets</h1>
// // // // // // //     <h2>my name is :{sname}</h2>
// // // // // // //     <h3>city:{place}</h3>
// // // // // // //     <h3>my aadhar:{aadhar}</h3>
// // // // // // //     <h3>my acc:{accno}</h3>
    
// // // // // // //     </>
// // // // // // //   )
// // // // // // // }
// // // // // // // export default App



// // // // // // // function App(){



// // // // // // //   var arr=[11,22,33,44,55,66,77,88,99,100,222]
// // // // // // //   var s=0
// // // // // // //   var ma=arr[0]
// // // // // // //   var order=arr
// // // // // // //   var fans=""
  
// // // // // // //   return(<>
    
// // // // // // //       <h2>New model map method(loop)</h2>
// // // // // // //     {arr.map((v)=>
// // // // // // //    <> {v}<br></br>
// // // // // // //    </>)}
// // // // // // //    <h2>Ascending order</h2>
// // // // // // //    <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
// // // // // // //   {order.map((item)=><>{item} +</>)}

// // // // // // //   <h2>Decending order</h2>
// // // // // // //    <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
// // // // // // //   {order.map((item)=><>{item},</>)}

// // // // // // //   <h3> adding element  in array</h3>
// // // // // // //   <div style={{display:"none"}}>{order.push(999)}</div>
// // // // // // //   {order.map((item)=><>{item},</>)}
// // // // // // //   <br></br>
// // // // // // //   <h3>remove last element in array</h3>
// // // // // // //   <div style={{display:"none"}}>{order.pop()}</div>
// // // // // // //   {order.map((item)=><>{item},</>)}
// // // // // // //   <h2> remove the last comma or plus or any char</h2>
// // // // // // //   <div style={{display:"none"}}>
// // // // // // //     {order.map((item)=><>{fans=fans+item+","}</>)}
// // // // // // //   </div>
// // // // // // //   {fans.slice(0,-1)}
// // // // // // //  </>
// // // // // // //   )
// // // // // // // }
// // // // // // // export default App


// // // // // // // function App(){
// // // // // // //      var a=100
// // // // // // //      var b=200
// // // // // // //      return(
// // // // // // //       <>
// // // // // // //       <h2> biggest among 2 nos using conditional or ternary oprator</h2>
// // // // // // //       <h1>biggest number:{a>b?a:b}</h1>
// // // // // // //        </>
// // // // // // //      )
// // // // // // //    }
// // // // // // //     export default App

// // // function App(){
// // //   return(
// // //     <div>
// // //     <h1> welcome to react js vinoth </h1>
// // //     <h1>welcome to react js</h1>
// // //     <h2>welcome to react js vinoth</h2>
// // //  </div>
// // //    )
// // //  }
// // //  export default App


// // // // // // // // // import logo from './logo.svg';
// // // // // // // // import './App.css';

// // // // // // // // function App() {
// // // // // // // //   return (
// // // // // // // //     <div className="App">
// // // // // // // //       <header className="App-header">
// // // // // // // //         <img src={logo} className="App-logo" alt="logo" />
// // // // // // // //         <p>
// // // // // // // //           Edit <code>src/App.js</code> and save to reload.
// // // // // // // //         </p>
// // // // // // // //         <a
// // // // // // // //           className="App-link"
// // // // // // // //           href="https://reactjs.org"
// // // // // // // //           target="_blank"
// // // // // // // //           rel="noopener noreferrer"
// // // // // // // //         >
// // // // // // // //           Learn React
// // // // // // // //         </a>
// // // // // // // //       </header>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default App;
