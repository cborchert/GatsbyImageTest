var fs = require('fs')

const filesContents = new Array(200).fill(0).map(
  (a, i) => `
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const Image${i + 1} = () => (
  <StaticQuery
    query={graphql\`
      {
        placeholderImage: file(relativePath: { eq: "random/${i + 1}.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    \`}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default  Image${i + 1};
`
)

filesContents.forEach((contents, i) => {
  fs.appendFile(`./src/components/images/Image${i + 1}.js`, contents, function(
    err
  ) {
    if (err) throw err
    console.log('Saved!')
  })
})
