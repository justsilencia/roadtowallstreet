import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Layout/Navbar"
import MainBanner from "../components/Landing/MainBanner"
import Partner from "../components/Landing/Partner"
import Features from "../components/Landing/Features"
import AboutMe from "../components/Landing/AboutMe"
//import DataAnalysis from "../components/Landing/DataAnalysis"
//import Services from "../components/Landing/Services"
import PriceTable from "../components/Landing/PriceTable"
//import ClientReviews from "../components/Landing/ClientReviews"
import Contact from "../components/Landing/Contact"
import Footer from "../components/Landing/Footer"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Financial Consulting" />

      <Navbar />

      <MainBanner />

      <AboutMe />

      <Features />

      <Partner />

      <PriceTable />

      {/*<Services />

       <DataAnalysis />

      <ClientReviews /> */}

      <Contact />

      <Footer />
    </Layout>
  )
}

export default IndexPage
