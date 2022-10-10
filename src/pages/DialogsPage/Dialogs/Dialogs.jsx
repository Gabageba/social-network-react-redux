import React from 'react'
import styles from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'

const Dialogs = ({dialogsData}) => {
  return (
    <div className={styles.dialogs}>
      <input type="text" className={styles.input} placeholder={'Поиск'}/>
      {
        dialogsData.map(data => {
          return (
            <Dialog key={data.id} img={data.img} name={data.name} userId={data.id}/>
          )
        })
      }
    </div>
  )
}

export default Dialogs