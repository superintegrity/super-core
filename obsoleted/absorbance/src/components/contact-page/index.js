import React from 'react'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Section, MapBox, ContactBox } from './styled'
import { ContactForm } from '../../components/contact-form'
import { useStaticQuery, graphql } from 'gatsby'
import { COMPLETED } from '../../libs/config'

export const ContactPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mapApiKey
        }
      }
    }
  `)

  const address = '203-205 Blackburn Road, Mount Waverley VIC 3149'
  const mapMarker = '203-205 Blackburn Road, Mount Waverley VIC 3149'
  const email = 'info@superintegrity.com.au'
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact.</h1>

      <Section>
        <ContactBox>
          <h3>{address}​</h3>

          <h3>
            Email: <a href={`mailto:${email}`}>{email}</a>​
          </h3>

          {/* <h3>
            Tel: <a href={`tel:${mobile}`}>{mobile}</a>
          </h3> */}

          {COMPLETED && <ContactForm toEmail={email} />}
        </ContactBox>
        <MapBox>
          <iframe
            title="address"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              site.siteMetadata.mapApiKey
            }&q=${encodeURIComponent(mapMarker)}`}
          ></iframe>
        </MapBox>
      </Section>
    </Layout>
  )
}
