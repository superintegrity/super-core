import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { Image } from "../components/image"
import { SEO } from "../components/seo"
import { SubHeader } from "../components/sub-header"
import { Practice } from "../components/practice"

const IndexPage = () => (
  <Layout>
    <SEO title="Practice Areas" keywords={[`gatsby`, `application`, `react`]} />
    <SubHeader title="Practice Areas" />
    {practices.map((practice, index) => (
      <Practice
        heading={practice.heading}
        subHeading={practice.subHeading}
        detail={practice.detail}
        index={index}
      />
    ))}
  </Layout>
)

const practices = [
  {
    heading: "BUSINESS LAW",
    subHeading: "Contracts, Mergers, Business Law",
    detail: `I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to 
      add your own content and make changes to the font. 
      Feel free to drag and drop me anywhere you like on your page. 
      I’m a great place for you to tell a story and let your users 
      know a little more about you.`,
  },
  {
    heading: "CIVIL & COMMERCIAL",
    subHeading: "Property Disputes, Personal Injury",
    detail: `I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to 
      add your own content and make changes to the font. 
      Feel free to drag and drop me anywhere you like on your page. 
      I’m a great place for you to tell a story and let your users 
      know a little more about you. This is a great space to 
      write long text about your company and your services. 
      You can use this space to go into a little more detail 
      about your company. Talk about your team and what services you provide.`,
  },
  {
    heading: "FAMILY LAW",
    subHeading: "Marriage, Civil Unions, Domestic Partnerships",
    detail: `I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to add 
      your own content and make changes to the font.
      Feel free to drag and drop me anywhere you like on your page. 
      I’m a great place for you to tell a story and let your 
      users know a little more about you.`,
  },
  {
    heading: "TRUST WILLS & PROBATE",
    subHeading: "Estate Management, Property Management, Mortgages",
    detail: `I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to 
      add your own content and make changes to the font. 
      Feel free to drag and drop me anywhere you like on your page.
      I’m a great place for you to tell a story and let your users know a 
      little more about you. ​This is a great space to write long text about 
      your company and your services. You can use this space to go into 
      a little more detail about your company. Talk about your team 
      and what services you provide.`,
  },
]

export default IndexPage
