import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Boutique Risk Management Consultancy Firm</h1>
    <h2>Providing Specialist Support to Your Organization</h2>
    <Link to="/services"> -> See Our Services</Link>
  </Layout>
)

export default HomePage
