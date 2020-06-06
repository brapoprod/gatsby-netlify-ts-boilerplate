import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="403: Forbidden" />
    <h1>Access denied</h1>
    <p>You shall not pass</p>
  </Layout>
)

export default NotFoundPage
