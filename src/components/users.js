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
              You
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
              The other party
            </div>
            <div className="description">
              Hudub lets you show organizations or people you sign contracts with that they are important for you.
              Hudub helps them access documents and information that makes it easy to understand contract conditions
              and see a history log of all events.
          </div>
        </div>
      </div>
      </div>
    </div>
      <div className="ui hidden divider"></div>
      <div className="ui hidden divider"></div>
      <h1>Other stakeholders</h1>
      <p>Software developers and lawyers can also take advantage of hudub.</p>

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
                and call APIs to interact with other services. Developers can write contracts using available modules (such as role assignments, acceptance methods, contract updates, etc...)
                use Git to manage contract versions, etc...
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
              Specialist technology lawyers know that the way contracts are usually managed sucks.
              With hudub they can write well defined contracts, build their own contract templates and efficiently check contracts correctnes
              easily scanning contract instances against original templates.
              Contract Git repos makes it easy to organize customer contracts, and automation helps them exceed customers expectations, providing them
              with a tool that facilitates contract execution. They can also aquire new customers from the community of hudub users.
            </div>
          </div>
        </div>

      </div>


</div>
</div>
