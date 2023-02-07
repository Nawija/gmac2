import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className=" text-center text-gray-900 flex items-center justify-center flex-col py-24 h-[96]">
        <p className="uppercase text-6xl lg:text-7xl font-semibold">Bład</p>
        <p className="text-gray-900 text-6xl lg:text-8xl font-semibold">404</p>
        <p className="mt-12 text-base lg:text-2xl">coś poszło nie tak :(</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Upss 404: Bład Ładowania Strony" />

export default NotFoundPage
