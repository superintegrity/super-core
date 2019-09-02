import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Section } from './styled'

const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <h1>
        Boutique <span>Risk Management</span> Consultancy Firm
      </h1>
      <h2>Providing Specialist Support to Your Organization</h2>
      <Link to="/services">&#9755; See Our Services</Link>
    </Section>
  </Layout>
)

export default HomePage
