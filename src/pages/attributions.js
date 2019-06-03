import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
<Layout>
  <div className="ui vertical center aligned segment">
    <h1>This website uses the following technologies and resources</h1>
    <p><a href="https://reactjs.org/">React JS</a></p>
    <p><a href="https://www.gatsbyjs.org/">Gatsby JS</a></p>
    <p><a href="https://git-scm.com/">Git</a></p>
    <p><a href="https://semantic-ui.com/">Semantic UI</a></p>
    <p><a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by fullvector - www.freepik.com</a></p>
  </div>
</Layout>
)

export default IndexPage
