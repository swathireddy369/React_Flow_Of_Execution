import React from "react";
import ReactDOM from "react-dom"
// <!-- create h1 element in react// -->
// <!-- okay i ahve method to create  -->
const h1ElementReact = React.createElement('h1', {}, "Hello React Engineer");
// <!-- //create elemt is react core  concept so we have react.createElement -->
// <!-- okay i am ready to render give me to root  -->
//  <!-- okay how can i get root in dom tree
//   i need to create root for dom tree  so that here we have to create root for our react dom tree so thet we have ReactDom.createRoot not in react make sure
console.log(h1ElementReact);

//    -->
// const root = ReactDOM.createRoot(document.getElementById('root'));
//here see you are create root for dom by suing already existed div so now your div bemcomes your reactdom root
//dom tree is ride having 
console.log(root);


// here it creates react Element (object)=HTML (broswer understands)
// while rendering again this object converts it into HTML tag and put it into the root Element

// HTML
// <div id="parent">
//     <div id="child1">
//         <h1>
//             i am h1 tag
//         </h1>
//<h2>
//             i am h2 tag
//         </h2>

//     </div>
// <div id="child2">
//         <h1>
//             i am h1 tag
//         </h1>
//<h2>
//             i am h2 tag
//         </h1>
//     </div>

// </div>


const element = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        React.createElement("h1", {}, "i am h1 tag"), React.createElement("h1", {}, "i am h2 tag")),
    React.createElement("div", { id: "child2" },
        React.createElement("h1", {}, "i am h1 tag"), React.createElement("h1", {}, "i am h2 tag"))]
);
//seee this is the that we create nested and multiple html elemnts see above commeted html example same how easy it is create same lement without react, so creating muliple and nested react elemnt inside react using react is a very tpugh job so here is tha place the hero JSX came into picture to make our job easy to create nested multiple html elemnt in react easily
// const rootmy = ReactDOM.createRoot(document.getElementById("root"));
// rootmy.render(element);
// hey seee here whenevr we are rendeing something in our root elemtn wich is id:root of div here we are rendeinr element in it right so that this render method will replace already existing or rednering elemnting inside root and replace it with this new element 
// /this is how js works 
// but only that portion like which element has root exceptthat remaing html work remains only which ever the tag which we took as root and rendering inside it that only will replace seeee that is waht we call it as libarry means it just a piece of code it works with already existing application it is not framewokr (it comes with lot of baggage) but react does not like that seee
// it jusra  piece of code written by facebook developers thats it and order of file smeans rendering of scrips is also matters in case where we are tryig to use or render js file whoch using reactour cdn links are after that srciot it wont work write becuase before adding react t usr code it does no who is react react.createElementand reactdom 
