import React from 'react'
import { defaults } from 'helpers/defaults'
import { storage } from 'helpers/storage'

export default class User extends React.Component {
  initialUsername = undefined
  constructor() {
    super()
    this.initialUsername = storage.get('username') || defaults.username
  }

  updateUsername = username => {
    storage.set('username', username)
  }

  preventInvalidInputs = event => {
    const blurInput = () => this.refs.input.blur()
    if (event.keyCode == 13 /* enter */) {
      event.preventDefault()
      event.stopPropagation()
      blurInput()
    }
    if (event.keyCode == 27 /* escape */) blurInput()
  }

  clearSelection = () => {
    // http://stackoverflow.com/a/13415236
    if (window.getSelection) window.getSelection().removeAllRanges()
    else if (document.selection) document.selection.empty()
  }

  handleValueChange = event => {
    this.updateUsername(event.target.innerText)
  }

  render = () => (
    <span
      ref="input"
      contentEditable="true"
      spellCheck="false"
      onKeyDown={this.preventInvalidInputs}
      onKeyUp={this.handleValueChange}
      onBlur={this.clearSelection}
      dangerouslySetInnerHTML={{ __html: this.initialUsername }}
      style={{
        cursor: 'text',
        // textShadow:
        //   "0 0 20px rgba(255,255,255, 0.5), 0 0 72px rgba(255,255,255, 0.8)",
        outlineWidth: 0,
      }}
    />
  )
}
