import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import InsertComponent from '../components/Admin/insert'
import Menu from '../components/Menu/Menu'
const UpdateMenu = () => {

    return (
        <Layout>
            <SEO title="Updateadmin" />
            <div className="fancyButtons" style={{display:`flex`,justifyContent:`space-around`, width:`650px`,margin:`auto`}}>
                <button className="btn btn-success">insert</button>
                <button className="btn btn-success">update</button>
                <button className="btn btn-success">delete</button>
            </div>
            <Menu />
            <InsertComponent />
        </Layout>
    )
}

export default UpdateMenu
