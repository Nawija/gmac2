import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Regulamin = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center text-base md:text-lg text-center px-4 py-8 md:py-20 globalWrapper">
      <p className="mb-1 mx-auto pl-4 text-start">
        1. Informacje o sklepie: w tym adres, dane kontaktowe i informacje o
        spółce.
      </p>
      <p className="mb-1 mx-auto pl-4 text-start">2. Warunki zakupów: w tym ceny, metody płatności i dostawy produktów.</p>
      <p className="mb-1 mx-auto pl-4 text-start">3. Warunki
      reklamacji: w tym procedury i wymagania dotyczące reklamacji produktów lub
      usług.</p>
      <p className="mb-1 mx-auto pl-4 text-start">4. Zasady zwrotów i wymiany: w tym warunki i procedury zwrotu lub
      wymiany produktów.</p>
      <p className="mb-1 mx-auto pl-4 text-start">5. Ochrona danych osobowych: w tym zasady gromadzenia,
      przetwarzania i przechowywania danych osobowych klientów.</p>
      <p className="mb-1 mx-auto pl-4 text-start">6. Warunki
      korzystania z usług: w tym zakaz kopiowania i wykorzystywania treści bez
      zgody firmy.</p>
      <p className="mb-1 mx-auto pl-4 text-start">7. Odpowiedzialność: w tym informacje dotyczące
      odpowiedzialności sklepu za produkty lub usługi.</p>
      <p className="mb-1 mx-auto pl-4 text-start">8. Zmiany regulaminu: w tym
      informacje o procedurze wprowadzania zmian w regulaminie i sposobie
      powiadamiania klientów o tych zmianach.</p>
      <p className="mb-1 mx-auto pl-4 text-start">9.  Postanowienia końcowe: w tym
      informacje o prawnej mocy regulaminu i jurysdykcji sądu.</p>
      <p className="mb-1 mx-auto pl-4 text-start">10. Aktualizacja
      regulaminu: regulamin powinien być regularnie aktualizowany, aby zapewnić,
      że jest zgodny z aktualnymi przepisami i praktykami.</p>
     
      
             
    </div>
  </Layout>
)

export const Head = () => <Seo title="Regulamin" />

export default Regulamin
