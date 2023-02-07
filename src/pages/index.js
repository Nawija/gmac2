import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Price from "../components/price"
import FasterBetter from "../components/fasterBetter"
import InfoGatsby from "../components/infoGatsby"
import WhyGatsby from "../components/whyGatsby"
import Opinion from "../components/opinion"

const IndexPage = () => (
  <Layout>
    <Hero />
    <InfoGatsby />
    <FasterBetter />
    <WhyGatsby />
    <Price />
    <Opinion />



  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
