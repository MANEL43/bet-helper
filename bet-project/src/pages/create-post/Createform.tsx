import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import {db} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom"
import {auth,provider} from "../../config/firebase"




interface CreateFormData{
description:string;
}
const postsRef=collection(db,"posts")

export const CreateForm=()=>{
const schema=yup.object().shape({
description:yup.string().required("You must add a description"),
})




const {register,
handleSubmit,
formState:{errors},
}=useForm<CreateFormData>({
resolver:yupResolver(schema),
});
const [user]=useAuthState(auth)
const navigate=useNavigate()

const onCreatePost= async (data:CreateFormData)=>{
await addDoc(postsRef,{
...data,
username:user?.displayName,
userId:user?.uid,
})
navigate("/postcomments")
//6.45.50
};


return(
    
<form onSubmit={handleSubmit(onCreatePost)}>
{user?
<>
<textarea placeholder="Description..."{...register("description")}/>
<p style={{color:"red"}}>{errors.description?.message}</p>
<input type="submit"/>
</>
:""}
</form>
    
);
};




