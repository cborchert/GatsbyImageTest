import React from 'react'

import Image1 from '../images/random/1.jpg'

import Layout from '../components/layout'

const arr = new Array(110).fill(0).map((a, i) => i + 1)

const IndexPage = () => (
  <Layout>
    <h1>Loading 1 Image, the old fashioned way</h1>
    <div className="image-grid">
      <img src={Image1} alt="Image1" />
    </div>
  </Layout>
)

export default IndexPage
