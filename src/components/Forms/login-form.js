import React, { useState, useContext } from "react"
import API from '../../utils/userapi'
import { UserLoginContext } from "../../context/cart-context";
const LoginForm = () => {
    const [username, setusername] = useState('');
    const [userpassword, setuserpassword] = useState('');
    const [setUserState] = useContext(UserLoginContext)
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
            .then((res) => { (res) ? setUserState(true) : console.log("norespomse") })
            .catch((e) => console.error(e));
    }

    return (
        <div className="login-form" style={{ display: `grid`, height: `500px` }}>
            <form onSubmit={tryLogin} style={{ display: `grid`, alignItems: `center`, marginTop: `120px` }}>
                <input name="userName" placeholder="name" value={username} onChange={userNameHandler}></input>
                <input name="userPassword" placeholder="password**" value={userpassword} onChange={userPasswordHandler}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm