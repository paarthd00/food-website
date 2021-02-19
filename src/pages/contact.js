import React from 'react'
import ContactForm from '../components/Forms/contact-form'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
            <pre>This is Contact Form</pre>
            <ContactForm />
    </Layout>
)

export default ContactPage