import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const LunaBlurp2 = () => {
  const data = useStaticQuery(graphql`
    query {
      lunaUni: file(relativePath: { eq: "luna-unicorn.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lunaThanks: file(relativePath: { eq: "luna-thanksgiving.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="luna-blurp2">
      <div className="container">
        <div className="inner-blurp">
          <div className="content">
            <h3>The Pug of my life.</h3>
            <p>Here are a few picture of Luna.</p>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.lunaUni.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.lunaThanks.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default LunaBlurp2
