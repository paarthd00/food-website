import React from 'react'
import ContactForm from '../components/Forms/contact-form'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="contactFormContainer" style={{ position: `relative`, top: `120px`, marginBottom: `150px` }}>
            <ContactForm />
        </div>

    </Layout>
)

export default ContactPage