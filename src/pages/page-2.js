import React from 'react'
import { Link } from 'gatsby'

import MyImg from '../components/MyImg'
import Layout from '../components/layout'

const arr = new Array(110).fill(0).map((a, i) => i + 1)

const IndexPage = () => (
  <Layout>
    <h1>
      Loading 200 individual images, using a single component and a single
      StaticQuery being filtered
    </h1>
    <Link to="/">See the first demo</Link>
    <div className="image-grid">
      {new Array(200).fill(0).map((a, i) => (
        <MyImg src={`random/${i + 1}.jpg`} />
      ))}
    </div>
    <Link to="/">See the first demo</Link>
  </Layout>
)

export default IndexPage
