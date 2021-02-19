import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu/menu"
import "../components/Menu/menu.css"
const SecondPage = () => (
  <Layout>
    <SEO title="MenuPage" />
    <div className="menu-container" style={{textAlign:`center`}}>
      <h1>This is Food page</h1>
      <h6>Spicy and aroma that tastes like the best dish from your lola</h6>
      <div className="menuContainer" style={{ maxWidth: `400px`, marginBottom: `1.45rem`, margin: `auto` }}>
        <Menu />
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)

export default SecondPage
