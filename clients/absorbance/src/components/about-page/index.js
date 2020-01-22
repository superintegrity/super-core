import React from 'react'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Image } from './images'
import { AboutSection, StaffSection } from './styled'
import { COMPLETED } from '../../libs/config'

export const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About.</h1>

    <AboutSection>
      <h3>Your Trustworthy SMSF Specialist</h3>
      <div>
        <p>
          We are CPAs and accredited SMSF specialist advisors. We work in SMSF
          industry for decades. We don’t deal with investment or financial
          products hence our advices are commission-free and independent. We
          take pride in providing excellent services at low prices with our
          ultimate business goal of saving your hard-earned money for your
          retirement. When serving our clients, we maintain a practice of being
          honest and a consistent and uncompromising adherence to strong moral
          and professional values.{' '}
          <strong>Integrity is the essence of everything successful.</strong>
        </p>
      </div>
    </AboutSection>

    {staffs.map(({ id, name, role, description }) => (
      <StaffSection key={id}>
        {COMPLETED && <Image id={id} />}
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
      </StaffSection>
    ))}
    <StaffSection></StaffSection>
  </Layout>
)

const staffs = [
  // {
  //   id: 'joZhou',
  //   name: 'Jo Zhou',
  //   role: 'Partner',
  //   description: `
  //     SMSF Specialist Advisor,
  //     Tax Agent,
  //     CPA
  //   `,
  // },
]
