import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const Profile = ()=>{

    const [userProfile, setUserProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()

    console.log(userid)

    useEffect(() => {
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=> res.json())
        .then(result=>{
            // console.log(result.mypost)
            setUserProfile(result)
        })
    }, [])

    const followuser = () =>{
        fetch('/follow',{
            method: "put",
            headers:{
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
    }

    return(
        <>
        {userProfile ? 
            <div style={{maxWidth:"550px", margin:"0px auto"}}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    margin:"18px 0px",
                    borderBottom:"1px solid grey"
                }}>
                    <div>
                        <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="profiles Pic"/>
                    </div>

                    <div>
                        <h4>{userProfile.user.name}</h4>
                        <h5> {userProfile.user.email} </h5>
                        <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                            <h5>{userProfile.posts.length} Posts</h5>
                            <h5>40 Followers</h5>
                            <h5>40 Following</h5>
                        </div>
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-2"
                             onClick={()=>followuser()}
                        >
                            Follow
                        </button>
                    </div>
                </div>    
            
                <div className="gallery">

                    {
                        userProfile.posts.map(item=>{
                            return(
                                <img className="item" src={item.photo} alt={item.title} />
                                
                            )
                        })
                    }

                    </div>
            </div>
        
        
        : <h2>Loading..</h2>}
        
        </>
          
    )
}

export default Profile