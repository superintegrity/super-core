import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import styled from "styled-components"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`menu`, `super`, `integrity`]} />
    <Root>
      {menus.map((menu, i) => (
        <Link to={menu.url}>
          <LinkContent>
            {menu.title} - 0{i}
          </LinkContent>
        </Link>
      ))}
    </Root>
  </Layout>
)

const menus = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

const Root = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: flex-end;
  align-items: flex-end;
`

const LinkContent = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`

export default MenuPage
