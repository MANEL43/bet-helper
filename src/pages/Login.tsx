import {useState} from "react"
import {login,logout} from "../store"
import {useDispatch,useSelector} from "react-redux"


export const Login=() =>{
const [newUsername,setNewUsername]=useState<string>("")
const dispatch=useDispatch()
const username=useSelector((state:any)=>state.user.value.username)
return(
<h1>
This is the login page
<input 
onChange={(e) =>{
    setNewUsername(e.target.value)}}/>
<button onClick={
() => dispatch(login({username:newUsername}))}>Submit Login</button>
<button onClick={() => dispatch(logout())}>Logout</button>
</h1>
)

}