import React from 'react'
import ApiContext from '../ApiContext'

import './AddFolder.css'

export default class AddFolder extends React.Component {
  static contextType = ApiContext


 render () {

   return (
     <form className="new-folder">
       <h2>Add Folder</h2>
       <div className="form-group">
         <label htmlFor="name">Folder Name: </label>
         <input type="text" className="newFolder__control"
           name="name" id="new-folder-name"/>
       </div>
       <div className="registration__button__group">
        <button type="button" className="new-folder-button" onClick={this.props.history.goBack}>
            Cancel
        </button>
        <button type="button" className="new-folder-button" onClick={() => {
          this.context.addFolder(document.getElementById('new-folder-name').value)} 
          }>
            Save
        </button>
       </div>
     </form>
   )
  }
}
