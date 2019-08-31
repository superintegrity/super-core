import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Image from './images'
import { AboutSection, StaffSection } from './styled'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About.</h1>

    <AboutSection>
      <h3>
        Since our inception, <span>Super Integrity</span> has been totally
        focused on building a strategic, quality search practice.
      </h3>
      <div>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors.
        </p>
      </div>
    </AboutSection>

    {staffs.map(({ id, name, role, description }) => (
      <StaffSection>
        <Image id={id} />
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
      </StaffSection>
    ))}
  </Layout>
)

const staffs = [
  {
    id: 'juliaErnst',
    name: 'Julia Ernst',
    role: 'Partner',
    description: `
      I'm a paragraph. Click here to add your own text and edit me. I’m a
      great place for you to tell a story and let your users know a little
      more about you.`,
  },
  {
    id: 'kevinGoldschmidt',
    name: 'Kevin Goldschmidt',
    role: 'Partner',
    description: `
      I'm a paragraph. Click here to add your own text and edit me. I’m a
      great place for you to tell a story and let your users know a little
      more about you.`,
  },
]

export default AboutPage
