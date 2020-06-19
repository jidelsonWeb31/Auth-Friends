import React, { useState } from 'react';
import axios from 'axios';

const initialLoginFormValues = {
    username: '',
    password: ''
}

function Login() {

    const [loginUser, setLoginUser] = useState([])
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
    const [isLoading, setIsLoading] = useState('')
    

    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        setLoginFormValues({...formValues, [name]:value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const newLoginUser = {
        
            username: loginFormValues.username,
            password: loginFormValues.password
        }
        setLoginFormValues(initialLoginFormValues)
     setLoginUser([...loginUser, newLoginUser])   
    }

    const onLogin = evt => {
        evt.preventDefault();
        axios
        .post('http://localhost:5000/api/login', loginFormValues)
        .then(res =>
             console.log(res)
             // i need to make sure once i get console.log working that it is
             // actually res.data.payload and not something else
            window.localStorage.setItem('token', res.data.payload)
        )
        .catch(err => console.log(err))
        
    }


    return(
        <div>
            <h2>Log In</h2>
            <form onSubmit={onSubmit}>

                <label>Username:&nbsp;
                    <input 
                    id='username'
                    name='username'
                    type='text'
                    loginFormValues={loginFormValues.username}
                    onChange={onInputChange}
                    />
                </label>

                <label>Password:&nbsp;
                    <input 
                    id='password'
                    name='password'
                    type='text'
                    loginFormValues={loginFormValues.password}
                    onChange={onInputChange}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;