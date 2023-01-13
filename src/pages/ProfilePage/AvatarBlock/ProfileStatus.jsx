import React from 'react'
import styles from './AvatarBlock.module.css'
import ClickAwayListener from 'react-click-away-listener'
import CompleteSvg from '../../../components/svgFiles/completeSvg'

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
            ? <ClickAwayListener onClickAway={this.activateEditMode}>
              <div className={styles.editStatusBlock}>
                <input autoFocus={true} placeholder={'Введите статус'}
                       className={`${styles.status} ${styles.editStatus}`} value={this.props.status}/>

                <CompleteSvg/>
              </div>
            </ClickAwayListener>
            : <div style={{cursor: 'pointer'}}>
              <p onClick={this.activateEditMode} className={styles.status}>{this.props.status}</p>
            </div>
        }
      </div>
    )
  }
}

export default ProfileStatus