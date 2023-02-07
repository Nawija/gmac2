import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Kontakt = () => (
  <Layout>
    <section id="contact">
      <div class="bg-white py-6 sm:py-8 lg:py-24">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-semibold text-center mb-4 md:mb-6">
              Formularz Kontaktowy
            </h2>

            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              {" "}
              Skorzystaj z naszego formularza kontaktowego, aby wysłać do nas
              wiadomość. Prosimy o podanie swoich danych kontaktowych oraz
              treści wiadomości, a my postaramy się odpowiedzieć na nią jak
              najszybciej. Jesteśmy do Twojej dyspozycji i z przyjemnością
              odpowiemy na wszystkie Twoje pytania.
            </p>
          </div>
          <form
            action="https://formsubmit.io/send/seovileo@gmail.com"
            method="POST"
            class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div>
              <input
                name="_redirect"
                type="hidden"
                id="name"
                value="https://nawija.github.io/gm/dziekujemy/"
              />

              <label
                htmlFor="first-name"
                for="first-name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Imię
              </label>
              <input
                name="first-name"
                placeholder="Imię"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                for="last-name"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Nazwisko
              </label>
              <input
                name="last-name"
                placeholder="Nazwisko"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                htmlFor="email"
                for="email"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                name="email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                placeholder="email@seovileo.pl"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                for="phone"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Tel
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+48 521 521 500"
                pattern="[0-9+]{9,12}"
                required
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="choosePlan"
                for="choosePlan"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Wybierz Plan
              </label>
              <Link
                class="text-amber-600 inline-block rounded-full ml-2 text-xs underline"
                to="/oferta"
              >
                Cennik
              </Link>
              <select
                name="choosePlan"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              >
                <option>Base</option>
                <option>Pro</option>
                <option>Special</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label
                htmlFor="message"
                for="message"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Wiadomość
              </label>
              <textarea
                name="message"
                class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-amber-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
              <p class="text-gray-400 text-xs">
                Zapoznaj sie również z naszym{" "}
                <Link
                  to="/regulamin"
                  class="hover:text-amber-500 active:text-amber-600 underline transition duration-200 text-gray-800"
                >
                  Regulaminem
                </Link>
                .
              </p>
              <button class="inline-block bg-gray-800 hover:bg-gray-900 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-0 transition duration-200 px-8 py-3">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default Kontakt
