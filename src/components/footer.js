import React from "react"
import { Link } from "gatsby"

export default () =>

<div className="footer">
  <div class="ui grid">
    <div class="eight wide column">
      <div className="ui horizontal list">
        <div className="item">
          <Link to="/legal/">Legal</Link>
        </div>
        <div className="item">
          <Link to="/attributions/">Attributions</Link>
        </div>
        <div className="item">
          <Link to="/contact/">Contact</Link>
        </div>
      </div>
    </div>
    <div class="left floated right aligned eight wide column">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </div>
</div>
