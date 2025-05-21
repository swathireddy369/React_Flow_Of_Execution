import React from "react";
import ReactDOM from 'react-dom/client';
//creating reactelement is very difficult when your are creating for multiple nested levels so there face book deevlopers decided to use jsx  but jsx is not developed by facebook developers
//let see JSX not html it s like html syntax
//it is a javascript object like when you a create a reactelement 
// XML ->(babel) babel converts it into React.createelemnt-> React.createElement-> object -> render -> html Element
const heading = <h1>Hello Swathi Amaravadi Welcome To Amazon</h1>
console.log(heading);

//this is a object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

