import React from 'react'
import './Feed.css'
import Story from '../Story/'
import NewPost from '../NewPost/'
import Posts from '../Posts/'

function Feed() {
    return (
        <div className='feed'>
            <Story />
            <NewPost />
            <Posts />
        </div>
    )
}

export default Feed
