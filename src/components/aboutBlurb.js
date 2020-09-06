import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurp = () => {
  const data = useStaticQuery(graphql`
    query {
      pugSmart: file(relativePath: { eq: "Pug-Dog-Nator.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pugMob: file(relativePath: { eq: "Pug-the-Mob.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurp">
      <div className="container">
        <div className="inner-blurp">
          <div className="content">
            <h3>The ability to Create or Destroy.</h3>
            <p>
              It is a long established fact that a pug can be either good or
              evil. When given the proper tools they will thrive and rise to the
              top of society. Becoming some of the wealthiest and most
              successful among the elite canine. But under the influence of
              cats, they will turn to a life of crime. They become trained
              assassins know as Pugnators.
            </p>
            <div className="btn-row">
              <Link to="/luna">View a good pug</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.pugSmart.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.pugMob.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurp
