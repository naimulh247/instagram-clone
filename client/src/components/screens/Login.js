import React from 'react'


const Login = ()=>{
    return(
        <div>
            <div class="card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                />
                <input 
                    type="text"
                    placeholder="password"
                />
                 <button class="btn waves-effect waves-light">
                    Login

                </button>
            </div>


        </div>
    )
}

export default Login