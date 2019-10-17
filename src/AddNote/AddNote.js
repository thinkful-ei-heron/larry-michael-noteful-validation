import React from 'react'
import ApiContext from '../ApiContext'

import './AddNote.css'

export default class AddNote extends React.Component {
  static contextType = ApiContext


  render() {

    return (
      <form className="new-note">
        <h2>AddNote</h2>
        <div className="form-group">
          <label htmlFor="name">Note Name: </label>
          <input type="text" className="newFolder__control"
            name="name" id="new-note-name" />
          <select id="new-note-folder">
            {this.context.folders.map(folder => {
              return <option key={folder.id} value={folder.id}>{folder.name}</option>
            })}
          </select>
          <label htmlFor="content">Note Content: </label>
          <textarea id="new-note-content" name="content" rows="5" cols="30"></textarea>
        </div>
        <div className="registration__button__group">
          <button type="button" className="new-note-button" onClick={this.props.history.goBack}>
            Cancel
        </button>
          <button type="button" className="new-note-button" onClick={() => {
            this.context.addNote(document.getElementById('new-note-name').value,
              document.getElementById('new-note-content').value,
              document.getElementById('new-note-folder').value)
            this.props.history.push('/')
          }
          }>
            Save
        </button>
        </div>
      </form>
    )
  }
}