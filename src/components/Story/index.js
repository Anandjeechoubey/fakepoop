import React from 'react'
import './Story.css'
import Jake from '../../images/jake.jpg'
import Amy from '../../images/amy.jpg'
import Boyle from '../../images/boyle.jpg'
import Rosa from '../../images/rosa.jpg'
import Gina from '../../images/gina.jpg'
import { Avatar } from '@material-ui/core'
import { StoreMallDirectoryTwoTone } from '@material-ui/icons'

function Story() {
    const stories = [   { name : 'Jake Peraulta', src : Jake},
                        { name : 'Amy Santiago', src : Amy},
                        { name : 'Rosa Diaz', src : Rosa},
                        { name : 'Gina Linetti', src : Gina},
                        { name : 'Charles Boyle', src : Boyle}];
    return (
        <div className='stories'>
            {stories.map( (story) =>
                <div className='story'>
                    <Avatar className='story__avatar' src={story.src} />
                    <p>{story.name}</p>
                </div>
            )}
        </div>
    )
}

export default Story
