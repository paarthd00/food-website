import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import Image from "../components/image"

const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Home" />
        <Image />
        <ContactForm />
        <Link to="/menupage/">Menu_Page</Link> <br />
        <Link to="/updatemenu/">InsertItems</Link> <br />
      </Layout>
  )
}

export default IndexPage
