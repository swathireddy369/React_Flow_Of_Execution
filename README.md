# React_Flow_Of_Execution
Here Everything React from scratch, i just wanted to go in depthy of each and every line of code no no not code every keyword so lets see

Week-1-Day-1:

<!-- Emmet // generate some for us -->
<!-- //very powerful -->
<!-- //nbest code editors -->
<!-- //html:5 (basic html) -->
<!-- Hello World -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<!-- //i am basic html -->

<body>
    <div id="root">
        <!-- <h1>Hello World </h1> -->
    </div>

<!-- //i am javascript 
create h1 tag -->
<script>
    const h1Element = document.createElement('h1');
    // i am empty give me some value to put in me
    h1Element.innerHTML="Hello Super Engineer";//imnnerHTML (HTML) shoud be caps
    //h1: hey give me as a child to root or your wish i do not have capability to go run in your html you have to tell to your one of your html element to take me as a child please
//    okay lets call root and give h1 to root
   const rooth=document.getElementById('root');
   //why you called me 
   //i will give a child of mine please put that into yours as a child
//    okay then  how can you
//i have one method to give you i will us ethat
rooth.appendChild(h1Element);
</script>

<!-- //react -->
<!-- //CDN Links website content devlivery network where react has been hosted so can use react  from thier scripts -->
<!-- //now to add react in out application simply add react CDN linkes -->
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<!-- //hey super by just this lines of code allow us to use react super cool  -->
<!-- //okay we are but what are these are doing where they come from who wrotte those 
  -->
<!-- thses are just js files to the end react js a js because react is opersource javascript libarary -->
 <!-- <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 hey i have opened its just javascript file all are just javascript functions  
 i came to know that this was written by facaebook developers to create react libarary
 and they gave us to use react in our apps this link is completely for react core 

 whereas  -->
<!-- <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> this is a;lso same like above one but here it has code reltaed to how the dom should be manupulated in browsers lets say js can run in diff platforms like in crhrim in mobile browser 
so tell us how to modify the dom in diff browsers react-dom would help us  -->
<!-- ///React//-->
<script>
// <!-- create h1 element in react// -->
// <!-- okay i ahve method to create  -->
const h1ElementReact=React.createElement('h1',{},"Hello React Engineer");
// <!-- //create elemt is react core  concept so we have react.createElement -->
// <!-- okay i am ready to render give me to root  -->
//  <!-- okay how can i get root in dom tree
//   i need to create root for dom tree  so that here we have to create root for our react dom tree so thet we have ReactDom.createRoot not in react make sure

//    -->
const root = ReactDOM.createRoot(document.getElementById('root'));
//here see you are create root for dom by suing already existed div so now your div bemcomes your reactdom root
//dom tree is ride having 
root.render(h1ElementReact);
</script>
</body>
</html>

Week-1-Day-2:
lets seperate our react code from html so that i create a app.js file and put that in index.html
wow its works exaclty no changes 
ok then lets add css in our application so that i create a index.cssand link that in our app 
<link rel="stylesheet" href="index.css">

here here remember one thing is link is for linking css to our html page see okay but we ened to psecify whoch relation because we use link for redicting a particular link as well right that is what rel="stylesheet" and and for evry link tag need href attribute wtha t wpould be our css fil,e name thats oitttttttttttttt

here :<link rel="stylesheet" href="index.css"/> we can place this anywhere in html page except in script tag  



instead of using already created production ready creat reactapp let create our own create-react-app kind or production ready app
 

 topic-2:
 igniting:


 what is npm :its nota node package manager
it is a repository of all libarries(packages) which you need in our applications 
now how can we get npm in our app so here you go

1)npm init when we do npm init it simply askas ome questions like author an dgit repo and test commands from that it will simpley generate a confighuartyionj in our app nothing but package.json
its a configuration file for npm
  now what is package and what id dependecy
  they nbpth are not same 
  package:
   it is a libary or its a piece of code which is reusable which has been provided in npm repository
   ************usally contains a package.json and readme file for that 
   ex:react,express,lodash
 dependecy:dependecny is a package, when you install a pcakge using npm then it will be lsited in your pacje.json depenceies this is waht we call depenncies.

 here lets install parcel which  a beast bundler
 we have webpac,parcel,vite
 let install parcel



npm install -D parcel


-d: why -D: in our packeg.json or our application needs packes for developemtn and production right so that if you metion -D it means that package will be used in development only where as nornal dependcy will be usedin production as well

DEvdepemcies
dependencies

ok after install it will be listed in devdepencies as we mention -D
good lets see here in our packeg.json 

parcel:"^2.8.3"

why ^ symnbol we have 3 options like no symbol,Carot,Tilde

no symbol means eaxct version 
carrot - it upgardes when there a minor (2.8.5)
tilde - it upgrades when there is major version (3.8.1)
its alwasy safe to alow minor versions only otherwise their might be a issue

after this step i got to see package-lock.json why what ius this and node-moduels as well

why packes-lock.json:

it gets into applciation when install a pakcge it mainins track of particlur version and its complete details of all depencies inour package.json
and it has hashcode as well it verifes while in production whether they are mainting same version of development or not (it should be right) ogtherwise our code or evrything will not work same as developemnt what we excpet to bein production

as we discuseed ifwe metion carrot sign it if thre ia minor upgarde package.jonlloocl will simple install theat upgarded onle

why node-modules:
oiyt comes into picture when we install a packege in our app
it comes with all related packages whoch aere in pur pacjes.json and it transitive depencies
direct depencies and thier depeninces
parcel- (its own dependies .packe,json) - (its own dependies .packe,json)-(its own dependies .packe,json)
it conatis code for all our dependeeic and thier dependies that why its huge

do we push that huge nodemoduels into our git 


noooo we should not it huge right we simple avoid pushing these nodemoul by simpoley mentioning in gitignore /node-modules

C:\Users\swath\Desktop\React_Flow_Of_Execution>npm install -D parcel

added 125 packages, and audited 126 packages in 27s

71 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\swath\Desktop\React_Flow_Of_Execution>npm audit --json
{
  "auditReportVersion": 2,
  "vulnerabilities": {},
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 0,
      "moderate": 0,
      "high": 0,
      "critical": 0,
      "total": 0
    },
    "dependencies": {
      "prod": 1,
      "dev": 172,
      "optional": 56,
      "peer": 0,
      "peerOptional": 0,
      "total": 172
    }
  }
}

//react
so now previously in our appp we use CDN links to broing react in our app right 
it is one way of oding but its not good way because we are doing api call to get data from api it costly 
and if there is a new version we cannot get that till we change link of cdn right
soo 
use another approach of getting react here we have  npm right in npm we have react
so lets install react for us 

npm install react
npm install react-dom
lets run our code then it will throw error that react is undefined riught bwe have installed but code does not know where react is so we have ti import react inour filr and react dom as well as well are using those two in oiur a[p whemn we wroked with cdn as well we took two linkes
]
 now lets run
  it thorws browser script does not allow import and export 
  <script src="./app.js"></script>
  hhere we need to change this scrupt type as module
  then it will workk
//parcel:
okay now lets execute parcel in our app let see
wjat it does

npx parcel index.html
index.html is our main opage
so here npx is to execute dependiec

so it screate a web bundle for us and it will create aserver and hosted or bundle in server seeee super job 

now our app is running in server which is created by parcel
it is doing all these by HMR(Hot Module Reloading) 
and when you chaneg aby thing oin our ap and jsut save it without refreshing browser you are able to see changes wow owow wow this is all has been done by file watch algorithm using parcel which is written in c++
 it wacthes files and updates the buld and refelt in broswer with change 

 while doing this bundle time is reduces grdual,ly beacuse it uses cahcing parcel-cahing we can see that folder in our apponce executed

 parcel does image optimization,compression,bundling,minification  sooooooooooooooooo
 react only does not make our application faster react does but not only it hads few depemnoies fto amke our app faste
 parcel is giving much powers to our react app to work fasete a
 althought parcel is also not alone who are doing this all stuff for uis it has ut depenncies
 consistent hashing
code splitting
differntial bundling -support old/diff browsers
diagnostic
error handling- display error
host your app on https
tree-shaking - remove unused code for you 
https://parceljs.org/
diff build for dev and production (little more time than than)

it does all these 

production build :  

npx parcel build index.html for prod we need one extar keyword build

see once we execute it it creates bundle and put in int dist
it coantins mainly 3 files index.js index.html index.cc amnd map files as well it compress all our code intlo 3 files onluy

so here do we need to put this in git 

exaclty no bacuese no need right we have suffcine tinformation in our application to create this build in production right we can soimple regenrate it this cache and dist 
hoo forgot we have parcel-cache folder as well beacue of these only build time will redcue gradually and while rendering im briswer it uses these two dist and parceh; cache

//browserslist

we have package as broswers list in npm
as we have seen that parce l carester diff bundles why those emans our application will support older broswers as well
so waht erv the broswers you mentone din our package.json :brosswerslist then it will create bunmdle for those broswers and will work on that  but here here if you give amny list then our applciation become more huge so thing twose before givng broswers lsit or making lsit 🚨 Build failed.

@parcel/transformer-js: Browser scripts cannot have imports or exports.

  C:\Users\swath\Desktop\React_Flow_Of_Execution\App.js:1:1
  > 1 | import React from "react";
  >   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
    2 | import ReactDOM from "react-dom"
    3 | // <!-- create h1 element in react// -->

  C:\Users\swath\Desktop\React_Flow_Of_Execution\index.html:64:1
    63 | so tell us how to modify the dom in diff browsers react-dom would help us  -->
  > 64 | <!-- ///React//-->
  >    | ^ The environment was originally created here
    65 | <script src="./App.js" />
    66 | </body>

  💡 Add the type="module" attribute to the <script> tag.
  📝 Learn more: https://parceljs.org/languages/javascript/#classic-scripts












