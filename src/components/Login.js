import Axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";


const initialState = {
  username: 'Lambda',
  password: 'i<3Lambd4'
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState(initialState)

  const {push} = useHistory()

  useEffect((evt)=>{
    evt.preventDefault()
    Axios.post('http://localhost:5000/api/login', user)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      push('/private-route')
    })
    .catch(err => {
      console.log(err.response)
    })
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = "Those were not valid credentials";
  //replace with error state

  const handleChange = evt => { 
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    })
  }


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={submitLogin}>
          <input
          name='username'
          type='text'
          placeholder='Username'
          onChange={handleChange}>
          </input>
          <input 
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}>
          </input>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.