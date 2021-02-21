import React, { useContext } from 'react'
import InsertComponent from '../Admin/insert'
import LoginForm from '../Forms/login-form'
import Menu from '../Menu/menu'
import { UserLoginContext } from '../../context/cart-context'
const Login = () => {

    const [userState, setUserState] = useContext(UserLoginContext)
    function toggleUserState() {
        setUserState(!userState)
    }
    return (
        <div>
            {
                (userState) ? <LoginForm /> : <> <InsertComponent />
                    <Menu /></>
            }
            <button onClick={toggleUserState}>toggle_login</button>
        </div>

    )

}

export default Login