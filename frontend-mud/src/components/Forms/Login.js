import React, { useState } from 'react';
import axios from 'axios'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
    margin: 0 auto;
    display: flex;
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
            .then(res => console.log(res))
            .catch(err => console.log(err))

        console.log(login);
        setLogin({
            username:'',
            password:''
        })
    };

    return(
        <FormContainer>
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
            </form>
        </FormContainer>
    )
};

export default Login;