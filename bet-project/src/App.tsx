import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import './picture2.jpg'
import pic1 from './picture1.png'

import {Routes,Route,Link} from "react-router-dom"
import {Home} from "./pages/Home"
import {Login} from "./pages/Login"
import {Contact} from "./pages/Contact"
import {CreatePost} from "./pages/create-post/Createpost"
import {PostComments} from "./pages/Postcomments"
import {Provider}  from "react-redux"
import {store} from "./store"

import {auth} from "./config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"

function App() {

  const url='https://www.mozzartbet.com'
  const [user]=useAuthState(auth)
  const signUserOut=async ()=> {
    await signOut(auth)
    }

  return (
    <div className="App">
      <div className="FlexWrapper">
      

      <div className="FlexItems FlexHeader">
      <Provider store={store}>

      
  <div className='Flexone'>

<Link to="/">Home</Link>

</div>

<div className='Flexone'>
<Link to="/login">Login</Link>
</div>

<Link to="/contact">Contact</Link>


<div>

{user && (
<>

<p>{user?.displayName}</p>
<img className="img" src={user?.photoURL || ""}width="40" height="40"/>


<button onClick={signUserOut}>Log Out</button>

</>
)}
</div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/createpost" element={<CreatePost/>}/>
</Routes>


</Provider>


</div>


  


<div className="Flextwo FlexContent">
<div className="a scale">
  I am content in the Content.
  </div>

  <div className="a scale">
  <a href={url} >
  AEK Athens
  3 Way
  18/12 18:00    Panaitolikos Agrinio - AEK Athens
  </a>
  </div>

  <div className="a scale">
  <a href={url} >
  over 191.5
Total (incl. overtime)
Shanghai Sharks  VS Liaoning Flying Leopards

</a>
  </div>


  <div className="a scale">
  <a href={url} >
  over 204.5
Total (incl. overtime)
Beijing Royal Fighter VS Jilin Northeast Tigers
</a>
  </div>
  <div className="a scale">
  <a href={url} >
  over 204.5
  Total (incl. overtime)
  Beijing Royal Fighters VS Jilin Northeast Tigers
  </a>
  </div>

  </div>
		<div className="FlexItems FlexSideOne" style={{ 
      backgroundImage: 'url(/picture2.jpg)'
    }}>I am content in the SideOne.</div>
		
		<div className="FlexSideTwo">
  <p>I am content in the SideTwo</p>
  <div className="c">
  <div><CreatePost/></div>
  <div><PostComments/></div>

  </div>
  </div>

		<div className="FlexItems FlexFooter">I am content in the Footer.@build and designed by ngugi emmanuel</div>
</div>
    </div>
  );
}

export default App;
