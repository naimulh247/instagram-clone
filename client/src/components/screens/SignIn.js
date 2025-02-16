import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const SignIn = ()=>{

    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const PostData = () =>{
        if(!/[A-Za-z0-9._%+-]+@(gmail.com)/.test(email)){
            M.toast({html:"fail"})
            return
        }
        fetch("/signin",{ 
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            password:password,
            email:email
            })
        }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error){
                   return M.toast({html:data.error, classes:"#c62828 red darken-3"})
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({type:"USER", payload:data.user})
                    M.toast({html:"signin success", classes:"#43a07 green darken-1"})
                    history.push('/')
                }
            }).catch(err=>{
                console.log(err)
            })
    }
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-2"
                    onClick={()=>PostData()}
                >
                    Login
                </button>
                <h5>
                    <Link to="/signup">Dont have an account?</Link>
                </h5>
            </div>


        </div>
    )
}

export default SignIn