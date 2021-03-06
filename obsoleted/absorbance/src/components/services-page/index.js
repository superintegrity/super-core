import React from 'react'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Section } from './styled'

export const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services.</h1>

    <Section>
      <h3>SMSF</h3>
      <div>
        <p>
          SMSF Setup – We offer administration services to facilitate SMSF
          establishment process. We can help you obtain all the required
          documentation and guide you through the process step by step to ensure
          its legal compliance.
        </p>
        <p>
          Services after setup – We assist with opening bank account and
          liaising with financial advisors to establish and maintain records of
          investment portfolios.
        </p>
        <p>
          SMSF Administration – We take care of your or your clients’ day-to-day
          accounting and administration tasks. We can also attend to end of year
          compliance work including tax returns and/or arranging an external
          independent audit.
        </p>
        <p>
          SMSF Consulting Services – We provide factual advice to help you keep
          up with legislation change and meet compliance requirement. We work
          with financial advisors, accountants and trustees to clarify issues
          and solve problems.
        </p>
      </div>
    </Section>
  </Layout>
)
