import React from 'react'
import styles from './AvatarBlock.module.css'
import ClickAwayListener from 'react-click-away-listener'
import CompleteSvg from '../../../components/svgFiles/completeSvg'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = (bool) => {
    this.setState({
      editMode: bool,
      status: this.props.status
    })
  }

  saveStatus = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <div>
        {
          this.state.editMode
            ? <ClickAwayListener onClickAway={() => this.activateEditMode(false)}>
              <div className={styles.editStatusBlock}>
                <input onChange={this.onStatusChange}
                       autoFocus={true}
                       placeholder={'Введите статус'}
                       className={`${styles.status} ${styles.editStatus}`}
                       value={this.state.status}
                />
                <span onClick={this.saveStatus} style={{display: 'flex'}}>
                  <CompleteSvg />
                </span>
              </div>
            </ClickAwayListener>
            : <div style={{cursor: 'pointer'}}>
              <p onClick={() => this.activateEditMode(true)}
                 className={styles.status}>{this.props.status || 'Добавить статус'}</p>
            </div>
        }
      </div>
    )
  }
}

export default ProfileStatus