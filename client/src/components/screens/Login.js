import React from 'react'


const Login = ()=>{
    return(
        <div>
            <div className="card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                />
                <input 
                    type="text"
                    placeholder="password"
                />
                 <button className="btn waves-effect waves-light">
                    Login
                    <i className="material-icons right">send</i>
                </button>
            </div>


        </div>
    )
}

export default Login