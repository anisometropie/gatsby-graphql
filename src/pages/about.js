import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// a page will always receive data as props
export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// exporting query from a page file, gatsby will automatically feed the page component
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
