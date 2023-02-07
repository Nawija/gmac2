import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Regulamin = () => (
  <Layout>
    <section>
      <div class="flex items-center justify-center flex-col my-16 h-96">
        <h2 class="text-amber-600 text-4xl text-center font-semibold mb-8">
          Dziękujemy za wiadomość!
        </h2>
        <p class="text-gray-900 w-60 text-center text-lg mb-8">
          wkrótce skontaktujemy sie z Państwem!
        </p>
        <Link class=" bg-gray-700 hover:bg-gray-900 focus-visible:ring ring-amber-300 transition duration-200 p-2 rounded text-white" to="/">
          Strona Główna
        </Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Regulamin" />

export default Regulamin
