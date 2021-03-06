import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from "styled-components";

const FormContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .login-container{
        margin-top: 200px;
    }
    h2{
        font-size: 30px;
    }
    label{
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    button{
        display: flex;
        margin-left: 930px;
        margin-top: 20px;
    }
    p{
        margin-top: 10px;
    }
    .reg-link{
        text-decoration: underline;
        margin-top: 10px;
    }
`;

const Login = props => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => setLogin({
        ...login,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault()
        axios.post('https://nes-game.herokuapp.com/api/login/', login)
            .then(res => {
                localStorage.setItem("token", res.data.key)
                props.history.push("/play")
            })
            .catch(err => console.log(err))

        console.log(login);
        setLogin({
            username:'',
            password:''
        })
    };

    return(
        <FormContainer>
        <div className='login-container'>
            <h2>Log In</h2>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    onChange={handleChange}
                    value={login.username}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    onChange={handleChange}
                    value={login.password}
                />
                <button type="submit">Submit</button>
                <p> New to our game? You can register...<Link to ='/register'><div className='reg-link'>Here</div></Link></p>
                
            </form>
            </div>
        </FormContainer>
    )
};

export default Login;