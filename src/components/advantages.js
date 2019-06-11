import React from "react"

export default () =>

<div className="ui middle aligned stackable grid container">
  <div className="column">
  <div className="ui stackable centered cards">
    <div className="card">
      <div className="content">
        <i class="code massive icon"></i>
        <div className="ui divider"/>
        <div className="header">
          Contract creation
        </div>
        <div className="description">
          Writing contracts as code is the best way to precisely define its content, and avoid the ambiguity of natural language.
          Create contracts from scratch or use a template from our gallery, such as Terms of Service, Creative Commons or Partner Agreement. Fill in the necessary data using auto generated forms.
          Define contract roles, users and access rights. Reuse clauses and track dependencies.
          Hudub is smart contracts without the hassle and cost of a blockchain.
        </div>
      </div>
      <div className="extra content">
      <a class="ui tag label">Rust</a>
      <a class="ui tag label">YAML</a>
      <a class="ui tag label">Code</a>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <i class="play circle outline massive icon"></i>
        <div className="ui divider"/>
        <div className="header">
          Contract execution
        </div>
        <div className="description">
          Most contract management tools focus only on contract drafting.
          Hudub lets you also manage contract execution too.
          Easily know who needs to do what and when and receive reminders of your next commitments. Record digital evidence of contract compliance in an immutable log.
          Tasks, such as signatures, payments, timestamps, etc... can be automated, integrate third-party services via API calls.
        </div>
      </div>
      <div className="extra content">
      <a class="ui label">Hashchain</a>
      <a class="ui label">APIs</a>
      </div>
    </div>

    <div className="card">
      <div className="content">
        <i class="search massive icon"></i>
        <div className="ui divider"/>
        <div className="header">
          Contract control
        </div>
        <div className="description">
          Hudub keeps your contracts organized in a Git repo. Each time the contract changes,and synchronize all the contract documents to your hard drive in your computer a new version is generated and documents are rendered in pdf, markdown, calendar, etc...
          Git lets you apply version management to your contracts and compare different contract versions.
          You can easily achieve high level contract governance without additional effort.
          And all the documents are available in a local folder in your computer.
        </div>
      </div>
      <div className="extra content">
      <a class="ui label">Git</a>
      <a class="ui label">PDF</a>
      <a class="ui label">Markdown</a>
      </div>
    </div>
    </div>
  </div>
</div>
