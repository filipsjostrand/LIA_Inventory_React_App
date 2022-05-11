//import PropTypes from 'prop-types'
import React, { Component } from 'react'

//export default class HeaderComponent extends Component {
class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

  render() {
    return (
      <div>
          <header>
              <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="http://localhost:3000/" className="navbar-brand">Nexer Inventory App</a>
                </div>
              </nav>
          </header>
    </div>

    )
  }
}

export default HeaderComponent
