import React, { useState } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import InsertComponent from '../components/Admin/insert'
import LoginForm from '../components/Forms/login-form'
import Menu from '../components/Menu/menu'


const AdminPage = () => {
    const [valid, setvalid] = useState(true)
    setvalid(false)
    return (
        <Layout>
            <SEO title="About" />
            {(valid) ? <LoginForm /> : <> <InsertComponent />
                <Menu /></>}
        </Layout>
    )
}

export default AdminPage