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

  const address = 'Suite 2.17/203-205 Blackburn Road, Mount Waverley VIC 3149'
  const email = 'jo_lilinth@hotmail.com'
  const mobile = '0430 777 699'
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact.</h1>

      <Section>
        <ContactBox>
          <h3>{address}​</h3>
          <h3>
            <a href={`mailto:${email}`}>{email}</a>​
          </h3>
          <h3>Tel: {mobile}</h3>

          {COMPLETED && <ContactForm toEmail={email} />}
        </ContactBox>
        <MapBox>
          <iframe
            title="address"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              site.siteMetadata.mapApiKey
            }&q=${encodeURIComponent(address)}`}
          ></iframe>
        </MapBox>
      </Section>
    </Layout>
  )
}
