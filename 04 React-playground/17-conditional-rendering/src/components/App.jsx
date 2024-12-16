import React from "react";
import Login from "./Login";

var isloggedIn = false;

const currentTime = new Date(2019,11,1,15).getHours();

console.log(currentTime);





function App() { 
  return <div className="container">{
  //      isloggedIn === true ?  <h1>Hello</h1> : <Login />
  // currentTime ? <h1>Hello</h1> : <login />
  //currentTime > 12 && <h1> Why are you still working?</h1>
        
        
  }</div>;
}

export default App;
