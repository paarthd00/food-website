import React from 'react'
import ContactForm from '../components/contactform'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
            <p>This is Contact Form</p>
            <ContactForm />
    </Layout>
)

export default ContactPage