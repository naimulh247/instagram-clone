import React, {useEffect, useState} from 'react'


const Profile = ()=>{

    const [mypics, setMypics] = useState([])

    useEffect(() => {
        fetch('/mypost',{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=> res.json())
        .then(result=>{
            console.log(result)
            setMypics(result.mypost)
        })
    }, [])

    return(
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
                    <h4>Naimul Hasan</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h5>40 Posts</h5>
                        <h5>40 Followers</h5>
                        <h5>40 Following</h5>
                    </div>
                </div>
            </div>    
        
            <div className="gallery">

                {
                    mypics.map(item=>{
                        return(
                            <img className="item" src={item.photo} alt={item.title} />
                            
                        )
                    })
                }

                </div>
        </div>

          
    )
}

export default Profile