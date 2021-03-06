import React from 'react'

import MyImg from '../components/MyImg'
import Layout from '../components/layout'

const arr = new Array(110).fill(0).map((a, i) => i + 1)

const IndexPage = () => (
  <Layout>
    <h1>
      Loading 200 individual images, using a single component and a single
      StaticQuery being filtered
    </h1>
    <div className="image-grid">
      {new Array(200).fill(0).map((a, i) => (
        <MyImg src={`random/${i + 1}.jpg`} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
