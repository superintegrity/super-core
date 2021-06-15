import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Section } from './styled'

export const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <h1>SUPER INTEGRITY</h1>
      <h2>Your Trustworthy SMSF Specialists</h2>
      <Link to="/services/">See Our Services</Link>
    </Section>
  </Layout>
)
