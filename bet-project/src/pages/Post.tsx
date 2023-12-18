import {Post as IPost} from "./Postcomments"

interface Props{
post:IPost
}

export const Post=(props:Props)=>{
    const {post}=props
    return(
    <div>
    
    <div className="b" style={{"fontSize":10}}>
    <p>{post.description}</p>
    </div>
    
    <div className="footer" style={{"fontSize":10}}>
    <p>@{post.username}</p>
    </div>
    
    </div>
    )
    }
    