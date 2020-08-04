import React, {useState, useEffect} from 'react'


const Home = ()=>{

    const [data, setData] = useState("")

    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result.post)
            setData(result.post)
            // console.log(data)
        })
     },[])

    
    if(!data){
            return(
                <div>Loading</div>
            )
        } 
    
    
    return(
        <div className="home">
            

            {
                data.map(item=>{
                    // console.log(data)
                    return(
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src={item.photo} />
                            </div>
                            <div className="card-content">
                                <i className="material-icons">favorite</i>
                                <h6> {item.title} </h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment"/>
                            </div>
                        </div>
                    )
                })
            }

            


        </div>
    )
}

export default Home