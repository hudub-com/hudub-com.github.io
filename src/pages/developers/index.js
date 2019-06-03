import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hudub Contract Management" keywords={[`contract`, `management`, `developers`]} />
    <div className="ui vertical center aligned segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="ui stackable grid">
              <div className="eight wide column" style={{fontFamily: 'sans-serif'}}>
                    <h1 style={{fontFamily: 'Open Sans, sans-serif', color: '#404040', fontSize: '4em'}} >Contracts as code</h1>
                    <h2  style={{fontFamily: 'Space mono, sans-serif', color: '#606060'}}>Hudub is an online platform that reinvents contract management using sofware development best practices and tools.</h2>
              </div>
              <div className="eight wide column">
                <img src="home.jpg" alt="home"/>
              </div>
            </div>
          </div>
        </div>
        <div className="ui vertical stripe segment">
          <h2>Technology</h2>
          <div className="ui text container">
            <div className="ui label massive"><i className="git icon" /> git</div>
            <div className="ui label massive"><i className="github icon" /> github</div>
            <div className="ui label massive"><i className="code icon" /> rust</div>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
<div class="segment">
  <h2>Create contracts</h2>
  <p>Easily create contracts from scratch by writing your own code.
    You can also copy one from our template gallery and use it out of the box or modify its code.
    Contracts can include reusable modules that do just one thing, but they do it well.
  </p>
</div>
<div class="ui divider"></div>
<div class="segment">
  <h2>Execute contracts</h2>
  <p>Because contract are code, hudub can create interfaces (forms, APIs, etc...) to gather necesary data at each contract state, and generate an audit trial</p>

</div>
      <a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by fullvector - www.freepik.com</a>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
