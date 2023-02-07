import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Price from "../components/price.js"

const Oferta = () => (
  <Layout>
      <Price />
  </Layout>
)

export const Head = () => <Seo title="Oferta" />

export default Oferta