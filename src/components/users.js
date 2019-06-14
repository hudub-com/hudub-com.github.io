import React from "react"

export default () =>

<div className="ui middle aligned container">
  <div className="ui hidden divider"></div>
  <div className="ui hidden divider"></div>

    <h1>Value for all contract parties</h1>
    <p>All the parties involved in the contract benefit from using hudub.</p>
    <p>With hudub offeror and offerees can access the same shared contract anytime
      and check that obligations have been complied with.</p>
    <div className="ui two column grid">
      <div class="column">
        <div className="ui fluid card">
          <div className="content">
            <img src="offerer.svg" height="100"  alt="offerer" />
            <div className="header">
              Contract offerer
            </div>
            <div className="description">
              Create your contract templates by cloning one from our contract template gallery or build your own from scratch.
              Easily create contract instances from your templates, and manage workflows such as participants definition, roles assignment, contract acceptance, etc...
              Make it easy for them to understand what their commitments are.
            </div>
          </div>

        </div>
      </div>
      <div class="column">
        <div className="ui fluid card">
          <div className="content">
            <img src="offeree.svg" height="100"  alt="offeree" />
            <div className="header">
              Contract offeree
            </div>
            <div className="description">
              You probably have multiple active contracts with different organizations. Would you be able tell exactly what obligations you have commited to with them?
              Promisees usually struggle to find a contract they accepted long ago and that has probably been modified afterwards.
          </div>
        </div>
      </div>
      </div>
    </div>
      <div className="ui hidden divider"></div>
      <div className="ui hidden divider"></div>
      <h1>Other stakeholders</h1>
      <p>Software developers and lawyers can also take advantage of hudub</p>

      <div class="ui two column grid">
        <div class="column">
          <div class="ui fluid card">
            <div className="content">
              <img src="developer.svg" height="100" alt="developers" />
              <div className="header">
                Developers
              </div>
              <div className="description">
                Software developers understand that managing contracts using software development best practices and tools makes sense.
                Contracts are written in Rust and configured in a YAML file, so that they can generate user interfaces to manage user interactions
                and call APIs to interact with other services. They can write contracts reusing available modules (such as role assignments, acceptance methods, contract updates, etc...)
                use Git to manage contract versions, etc...
                Create smart contracts without a blockchain.
              </div>
            </div>

          </div>
        </div>

      <div class="column">
        <div class="ui fluid card">
          <div className="content">
          <img src="lawyer.svg" height="100" alt="lawyers" />
            <div className="header">
              Lawyers
            </div>
            <div className="description">
              Innovation aware lawyers know that the way contracts are usually managed sucks.
              With hudub they can write well defined contracts, build their own contract template gallery and efficiently check contracts correctnes
              easily scanning contract instances against original templates.
              Contract Git repos makes it easy to organize customer contracts and automation lets you exceed customers expectations providing them
              with a tool that automates contract execution.
              Reach new customers from the community of hudub users.
            </div>
          </div>
        </div>

      </div>


</div>
</div>
