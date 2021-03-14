import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './NewPost.css'
import Holt from '../../images/holt.jpg'
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons'

function NewPost() {
    const [input, setInput ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //DB waala kaam
        setInput('');
    }

    return (
        <div className='new-post'>
            <div className='new-post__top'>
                <Avatar src={Holt}/>
                <form onSubmit={handleSubmit}>
                    <div className='post-input'>
                        <input placeholder="What's on your mind?"
                        value = {input}
                        onChange = {(e) => {setInput(e.target.value)} }
                        />
                    </div>
                </form>
                
            </div>
            <hr/>
            <div className='new-post__bottom'>
                <div className='options'><Videocam style={{color:'red'}} /> <p>Live Video</p> </div>
                <div className='options'><PhotoLibrary style={{color:'green'}} /> <p>Photo/Video</p></div>
                <div className='options'><InsertEmoticon style={{color:'yellow'}} /> <p>Feeling/Activity</p></div>
            </div>
            
        </div>
    )
}

export default NewPost
