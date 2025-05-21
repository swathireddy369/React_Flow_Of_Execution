import React from "react";
import ReactDOM from 'react-dom/client';

//JSX(React.createElement)
const heading=<h1>Hello I am JSX(React Element)</h1>

// component Composition
const Heading1=()=>{

return (
    <div>
    
<h1>Hello I am JSX(React Element) but in Function </h1></div>)
}


//React component

// class components
// functional components
// functional components:
//  is defined as a normal js function which returns a piece of jsx(react elemnts)
// the functiona name should be capital because then babel get to know its react components
// its similar to jsx except arrow function indication which we put in FC
// but there is a difference oin rendering we should render FC like this <Heading/> reactdom
var count=3693;
// const data=fecth();//here if we get malicious data(cross site effect) means lets say if some other persone can run a js in pur laptop then can read our localcache data so when we get any data like this our jsx will sanitize it before going to the broswer iyslef wow amazing 
// 
const Heading=()=>{

    //compinent composition -calling one compoen t in an other component
  return (
    <div>
       <h1> {count}</h1>
         {heading}
         {/* //these are three ways to call fc in side another fc */}
         {Heading1()}
         <Heading1></Heading1>
  <Heading1/>
 {console.log("i was amazing when log working in jsx")}
  <h1>Hi i am react functional component</h1></div>
);
}

const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(<Heading/>);


//now we can write js in jsx letsay our heading is simple js object right we can use that in jsx

//how your react code readbale ans is not because of react it ,ake our code more clumbsy okay jsx makes our code more redable and faster