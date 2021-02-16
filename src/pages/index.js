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
        <Link to="/page-2/">Read More</Link> <br />
      </Layout>
  )
}

export default IndexPage
