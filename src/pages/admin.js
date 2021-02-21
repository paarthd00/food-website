import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from '../components/Admin/login'


const AdminPage = () => {

    return (
        <Layout>
            <SEO title="ADMIN" />
            <Login />
        </Layout>
    )
}

export default AdminPage