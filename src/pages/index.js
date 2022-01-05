import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from '../components/navbar'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Seo title="Home" />
    <h1>Dear viewer</h1>
    <p>Welcome to the best challenge you seen thus far.</p>
    <p>Let me know what you think.</p>
    <StaticImage
      src="../images/image.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link style={{color: 'royalblue'}} to="/page-2/">Go to page 2</Link> <br />
      <Link style={{color: 'royalblue'}} to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
