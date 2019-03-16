import React, { Component } from 'react'

import BorderWrapper from 'react-border-wrapper'

export default class App extends Component {
  render () {
    return (
      <div style={{margin: "50px"}}>
        <BorderWrapper>
          <h1>Hey there</h1>
        </BorderWrapper>
      </div>
    )
  }
}
