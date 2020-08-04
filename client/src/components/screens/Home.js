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
            console.log(result.post)
            setData(result.post)
            console.log(data)
        })
     },[])

    return( 
        <div className="home">
            

            {/* {
                data.map(item=>{
                    console.log(data)
                    return(
                        <div className="card home-card">
                            <h5>Naimul</h5>
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                            </div>
                            <div className="card-content">
                                <i className="material-icons">favorite</i>
                                <h6>Title</h6>
                                <p>This is an amazing post</p>
                                <input type="text" placeholder="add a comment"/>
                            </div>
                        </div>
                    )
                })
            } */}

            


        </div>
    )
}

export default Home