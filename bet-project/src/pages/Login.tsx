import {useState} from "react"
import {login,logout} from "../store"
import {useDispatch,useSelector} from "react-redux"

import {auth,provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {Navigate, useNavigate} from "react-router-dom"
//import {useAuthState} from "react-firebase-hooks/auth"



export const Login=() =>{
const [newUsername,setNewUsername]=useState<string>("")
const navigate=useNavigate()
const dispatch=useDispatch()
//const [user]=useAuthState(auth)

const username=useSelector((state:any)=>state.user.value.username)


const signInWithGoogle = async () =>{
    const result =await signInWithPopup(auth,provider);
    console.log(result);
    navigate("/")
    };

   
return(

    <div>
<p>Sign In With Google</p>
<button onClick={signInWithGoogle}>Sign in with Google</button>


</div>

)

}
