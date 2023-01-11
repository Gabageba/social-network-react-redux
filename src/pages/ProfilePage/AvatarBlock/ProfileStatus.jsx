import React from 'react'
import styles from './AvatarBlock.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    return (
      <div>

        {
          this.state.editMode
            ? <div>
              <input autoFocus={true} onBlur={this.activateEditMode} className={styles.status} type="text" value={this.props.status}/>
            </div>
            : <div>
              <p onClick={this.activateEditMode} className={styles.status}>{this.props.status}</p>
            </div>
        }
      </div>
    )
  }
}

export default ProfileStatus