import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      midpic: file(relativePath: { eq: "luna-sleeping-toy.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leftpic: file(relativePath: { eq: "luna-sleeping.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightpic: file(relativePath: { eq: "luna-coding.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.leftpic.childImageSharp.fluid} />
          </div>
          <div className="main-text">Pug Life</div>
          <div className="main-image">
            <Img fluid={data.midpic.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.rightpic.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Pugs Love to sleep!</div>
    </div>
  )
}

export default Banner
