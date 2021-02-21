import React, { useState } from "react"
import API from '../../utils/api'
const LoginForm = () => {
    const [username, setusername] = useState('')
    const [userpassword, setuserpassword] = useState('')

    const userNameHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;

        setusername(val)
    }
    const userPasswordHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setuserpassword(val)
    }
    const tryLogin = async () => {
        await API.login({ username, userpassword })
    }

    return (
        <div className="login-form">
            <form onSubmit={tryLogin}>
                <input name="userName" value={username} onChange={userNameHandler}></input>
                <input name="userPassword" value={userpassword} onChange={userPasswordHandler}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm