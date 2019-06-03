import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Usp from "../components/usp"
import Technology from "../components/technology"

const IndexPage = () => (
  <Layout>
    <SEO title="Hudub Contract Management" keywords={[`contract`, `management`, `developers`]} />
    <div class="ui info message">
      <div className="ui vertical center aligned segment">
        <h1>Until hudub is released, we are managing our contracts in github</h1>
          <p><a href="https://github.com/hudub-com/hudub-legal/blob/master/hudub-cookies-policy.md" target="_blank">Cookies policy</a></p>
          <p><a href="https://github.com/hudub-com/hudub-legal/blob/master/hudub-privacy-policy.md" target="_blank">Privacy policy</a></p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
