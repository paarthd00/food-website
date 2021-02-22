import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu/menu"
import "../components/Menu/menu.css"
const SecondPage = () => (
  <Layout>
    <SEO title="MenuPage" />
    <div className="menu-container" style={{ textAlign: `center`, top: `120px`, position: `relative` }}>
      <h1>Menu</h1>
      <h6>Spices and aroma like non-other</h6>
      <div className="menuContainer" style={{ maxWidth: `400px`, margin: `auto` }}>
        <Menu />
      </div>
      <br></br><br></br><br></br>
    </div>

  </Layout>
)

export default SecondPage
