import { Avatar, IconButton } from '@material-ui/core'
import { ChatBubbleOutline, MoreHoriz, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Posts.css'
import Jake from '../../images/jake.jpg'
import Amy from '../../images/amy.jpg'
import Boyle from '../../images/boyle.jpg'
import Rosa from '../../images/rosa.jpg'
import Gina from '../../images/gina.jpg'

function Posts() {

    const posts = [{name : 'Jake Peraulta',
                    timestamp : '4h',
                    desc : 'Discription of the Post!',
                    src : Jake,
                    url : 'https://images.unsplash.com/photo-1613976132984-1854eff7a5a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'},
                    {name : 'Amy Santiago',
                    timestamp : '2h',
                    desc : 'Discription of the Post!',
                    src : Amy,
                    url : 'https://images.unsplash.com/photo-1551298937-bef2232ce880?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80'},
                    {name : 'Rosa Diaz',
                    timestamp : '3w',
                    desc : 'Discription of the Post!',
                    src : Rosa,
                    url : 'https://images.unsplash.com/photo-1551244072-5d12893278ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'},
                    {name : 'Gina Linetti',
                    timestamp : '7min',
                    desc : 'Discription of the Post!',
                    src : Gina,
                    url : 'https://images.unsplash.com/photo-1615271292858-7107dcb37363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
                    {name : 'Charles Boyle',
                    timestamp : '3yr',
                    desc : 'Discription of the Post!',
                    src : Boyle,
                    url : 'https://images.unsplash.com/photo-1515984977862-1c7201ef324d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'}];

    return (
        <div>
            {posts.map( (post) => 
            <div className='posts'>
                <div className='posts__top'>
                    <div className='info'>
                        <Avatar src={post.src} />
                        <div className='post-info'>
                            <h4>{post.name}</h4>
                            <p className='timestamp'>{post.timestamp}</p>
                        </div>
                    </div>
                    <IconButton style={{float:'right'}}>
                        <MoreHoriz />
                    </IconButton>
                </div>
                <div className='posts__middle'>
                    <p>Discription of the Post!</p>
                    <img src={post.url} />
                </div>
                <hr/>
                <div className='posts__bottom'>
                    <div className='interaction'><ThumbUp/> <span>Like</span></div>
                    <div className='interaction'><ChatBubbleOutline/> <span>Comment</span></div>
                    <div className='interaction'><NearMe/> <span>Share</span></div>
                </div>
                <hr/>
            </div>    
            )}
            
        </div>
        
    )
}

export default Posts
