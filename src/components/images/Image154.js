
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const Image154 = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "random/154.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default  Image154;
