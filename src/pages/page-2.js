import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is Food page</h1>
    <p>Spicy and aroma that tastes like the best dish from your lola</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem`, margin: `auto` }}>
      <Menu />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
