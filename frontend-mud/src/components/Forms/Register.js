import React, { useState } from 'react';
import axios from 'axios'
import styled from "styled-components";

const FormContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Register = props => {
    const [register, setRegister] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => setRegister({
        ...register,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault()
        axios.post('https://nes-game.herokuapp.com/api/register/', register)
            .then(res => {
                localStorage.setItem("token", res.data.key)
                props.history.push("/play")
            })
            .catch(err => console.log(err))

        console.log(register);
        setRegister({
            username:'',
            password:''
        })
    };

    return(
        <FormContainer>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    onChange={handleChange}
                    value={register.username}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    onChange={handleChange}
                    value={register.password}
                />
                <button type="submit">Submit</button>
            </form>
        </FormContainer>
    )
};

export default Register