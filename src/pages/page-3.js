import React from 'react'

import Image1 from '../components/images/Image1'
import Layout from '../components/layout'

const arr = new Array(110).fill(0).map((a, i) => i + 1)

const IndexPage = () => (
  <Layout>
    <h1>
      Loading an individual image, using a single component and a single
      StaticQuery
    </h1>

    <div className="image-grid">
      <Image1 />
    </div>
  </Layout>
)

export default IndexPage
