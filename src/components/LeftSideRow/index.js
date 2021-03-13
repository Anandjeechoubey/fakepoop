import { Avatar } from '@material-ui/core'
import React from 'react'
import './LeftSideRow.css'

function LeftSideRow({ src, Icon, title}) {
    return (
        <div className='lsRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default LeftSideRow
