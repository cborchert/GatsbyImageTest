import React from 'react'

import MyImg from '../components/MyImg'
import Layout from '../components/layout'

const arr = new Array(110).fill(0).map((a, i) => i + 1)

const IndexPage = () => (
  <Layout>
    <h1>
      Loading an individual image, using a single component and a single
      StaticQuery being filtered
    </h1>
    <div className="image-grid">
      <MyImg src={`random/1.jpg`} />
    </div>
  </Layout>
)

export default IndexPage
