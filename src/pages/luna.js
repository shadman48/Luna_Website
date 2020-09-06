import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import Header from "../components/header"
import LunaBlurb from "../components/lunaBlurb"
import LunaBlurb2 from "../components/lunaBlurb2"
import Footer from "../components/footer"

const Luna = () => (
  <div>
    <Header />
    <LunaBlurb />
    <LunaBlurb2 />
    <Footer />
  </div>
)

export default Luna
