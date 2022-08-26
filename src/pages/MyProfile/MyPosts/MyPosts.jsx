import React from 'react'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <Post name={'Имя Фамилия'}
            avatar={'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'}
            message={'Hello motherfucker'}/>
      <Post name={'Александр Пантелеев'}
            avatar={'https://a.d-cd.net/1a424f2s-960.jpg'}
            message={'Fuck you'}/>
      <Post name={'Хер с горы'}
            avatar={'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png'}
            message={'Хай'}/>
    </div>
  )
}

export default MyPosts