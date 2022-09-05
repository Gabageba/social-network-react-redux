import React from 'react'
import Post from './Post/Post'

const MyPosts = ({postData}) => {

  return (
    <div>
      {
        postData.map(data => {
          return <Post key={data.id} name={data.name} avatar={data.avatar} message={data.message}/>
        })
      }
    </div>
  )
}

export default MyPosts