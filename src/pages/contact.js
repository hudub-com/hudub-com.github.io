import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contactform from "../components/contactform"

const IndexPage = () => (
  <Layout>
      <div className="ui vertical center aligned segment">
        <Contactform />
      </div>
  </Layout>
)

export default IndexPage
