# Gatsby Images and Static Queries

Just an on-the-spot test of using individual Static Queries for 200 images vs using one Static Query and filtering them.

At the moment, Gatsby does not allow you to make your Static Queries dynamic (using variables), so creating a smart image components which take advantage of Gatsby-Image has been difficult.

For example, if you want to render a single image using Gatsby Image, you might use a StaticQuery like so:

```jsx
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const Image1 = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "random/1.jpg" }) {
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
)
export default Image1
```

This grabs the image `images/random/1.jpg` and allows you to use the sharp transform on it for that marvelous blur up effect.

But this would mean creating an individual component for each image you want to use. What if you wanted to create a reusable component that grabbed your image based on an src prop, like this?

```jsx
<MyImg src="random/1.jpg">
```

In an ideal world, you could modify the graphQL query to use `props.src`. At the moment, we don't live in this ideal world and these static queries remain static. 😦

In the end we often reach for a more "hacky" approach which queries ALL image and then filters based on the src prop. Like so:

```jsx
import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

function renderImage(file) {
  return <Img fluid={file.node.childImageSharp.fluid} />
}

const MyImg = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === props.src)
        )
      }
    />
  )
}

export default MyImg
```

The question is, does using the second approach use more computing power for the end users?

# Results

TBD

Deployed to netlify here: https://dazzling-bohr-1d9d3d.netlify.com/
