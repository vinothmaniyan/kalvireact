function App(props)
// data types kandupudikirathu
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(
    <>
    <h3>type of rno:{typeof(a)}</h3>
    <h3>type of sname:{typeof(b)}</h3>
    <h3>type of marital status:{typeof(c)}</h3>
    <h3>type mark:{typeof(d)}</h3>
    <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
    <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
    

    </>
  )
}
export default App
// ithu vanthu function components class  componenets ah vita ithutha analla irukum easy ah purium
// import parse from 'html-react-parser';
// function App(props)
// {
//   var ans=""
//   for(var s in props.data)
//   {
//     ans=ans+`<li>${s}=${props.data[s]}</li>`
//     console.log(s)

//   }
//   return(
//     <>
//     {parse("<ol>"+ans+"</ol>")}
//     </>
//   )
// }
// export default App
// import React from "react";
// import parse from 'html-react-parser';
// class App extends React.Component
// {
//   constructor(props)
//   {
//     var ans=""
//     super(props)
//     for(var s in props.data)
//   {
//       ans=ans+`<li>${s} =${props.data[s]}<br></br></li>`
//       console.log(s)
//     }
//     this.state={
//       res:"<ol type=I>"+ans+"</ol>"
//     }
//     // this.state={
//     //   res:ans
//     // }
//   }
//   render()
//     {
//       return(
//         <>
//         <h1>compine react state+props</h1>
//         {parse(this.state.res)}
//       <div id="res"></div>
//         </>
//       )

//     }
  
// }
// export default App
// import React from "react";
// class App extends React.Component
// {
//   constructor()
//   {
//     super()
//     this.state={
//       sno:11,
//       sname:"vinoth",
//       mark:[77,88,99,100],


//     }
//   }
//   show=()=>{
//     this.setState({sname:"vinoth M"})
//   }
//   dis=()=>{
//     this.setState({mark:[10,20,30,40]})
//   }
//   dis1=()=>{
//     const newmark=[...this.state.mark]
//     newmark[3]=100
//     this.setState({mark:newmark})
//   }

//   render()
//   {
//     return(
//       <>
//       <h1>this is class componenets</h1>
//       <h2>SerialNumber:{this.state.sno}</h2>
//       <h2>Student Name:{this.state.sname}</h2>
//       <h2>Student mark:{this.state.mark}</h2>
//       {this.state.mark.map(
//         (v,index)=><>
//         Mark:{index+1}={v}<br></br>
//         <button onClick={this.show}>update name</button>
//         <button onClick={this.dis}>update all mark</button>
//         <button onClick={this.dis1}>update single mark</button>
//         </>
//       )}
//       </>
//     )
//   }
// }
// export default App

// // /* // import { aadhar,accno,place,sname } from "./mycomponents/commonvariabl"
// // // import Vinoth from "./mycomponents/Vinoth"
// // // function App(){
// // //   return(
// // //     <> */}
// // //        <Vinoth/>
// // //     <h1>this is default componenets</h1>
// // //     <h2>my name is :{sname}</h2>
// // //     <h3>city:{place}</h3>
// // //     <h3>my aadhar:{aadhar}</h3>
// // //     <h3>my acc:{accno}</h3>
    
// // //     </>
// // //   )
// // // }
// // // export default App



// // // function App(){



// // //   var arr=[11,22,33,44,55,66,77,88,99,100,222]
// // //   var s=0
// // //   var ma=arr[0]
// // //   var order=arr
// // //   var fans=""
  
// // //   return(<>
    
// // //       <h2>New model map method(loop)</h2>
// // //     {arr.map((v)=>
// // //    <> {v}<br></br>
// // //    </>)}
// // //    <h2>Ascending order</h2>
// // //    <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
// // //   {order.map((item)=><>{item} +</>)}

// // //   <h2>Decending order</h2>
// // //    <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
// // //   {order.map((item)=><>{item},</>)}

// // //   <h3> adding element  in array</h3>
// // //   <div style={{display:"none"}}>{order.push(999)}</div>
// // //   {order.map((item)=><>{item},</>)}
// // //   <br></br>
// // //   <h3>remove last element in array</h3>
// // //   <div style={{display:"none"}}>{order.pop()}</div>
// // //   {order.map((item)=><>{item},</>)}
// // //   <h2> remove the last comma or plus or any char</h2>
// // //   <div style={{display:"none"}}>
// // //     {order.map((item)=><>{fans=fans+item+","}</>)}
// // //   </div>
// // //   {fans.slice(0,-1)}
// // //  </>
// // //   )
// // // }
// // // export default App


// // // function App(){
// // //      var a=100
// // //      var b=200
// // //      return(
// // //       <>
// // //       <h2> biggest among 2 nos using conditional or ternary oprator</h2>
// // //       <h1>biggest number:{a>b?a:b}</h1>
// // //        </>
// // //      )
// // //    }
// // //     export default App

// function App(){
//   return(
//     <div>
//     <h1> welcome to react js vinoth </h1>
//     <h1>welcome to react js</h1>
//     <h2>welcome to react js vinoth</h2>
//  </div>
//    )
//  }
//  export default App


// // // // // import logo from './logo.svg';
// // // // import './App.css';

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <header className="App-header">
// // // //         <img src={logo} className="App-logo" alt="logo" />
// // // //         <p>
// // // //           Edit <code>src/App.js</code> and save to reload.
// // // //         </p>
// // // //         <a
// // // //           className="App-link"
// // // //           href="https://reactjs.org"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Learn React
// // // //         </a>
// // // //       </header>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
