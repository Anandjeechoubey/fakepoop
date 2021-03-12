import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './LeftSideBar.css'
import LeftSideRow from '../LeftSideRow/';
import { LocalHospital, EmojiFlags, People, Chat, Storefront, VideoLibrary } from "@material-ui/icons";
import Holt from '../../images/holt.jpg'

function LeftSideBar() {
    const username = 'Anand';

    return (
        <div className='lsbar'>
            <div>
                <div className='lsRow'>
                    <Avatar src={Holt} />
                    <h4>{username}</h4>
                </div>
                <LeftSideRow Icon={LocalHospital} title='Covid-19 Information Center'/>
                <LeftSideRow Icon={EmojiFlags} title='Pages'/>
                <LeftSideRow Icon={People} title='Friends'/>
                <LeftSideRow Icon={Chat} title='Messenger'/>
                <LeftSideRow Icon={Storefront} title='Marketplace'/>
                <LeftSideRow Icon={VideoLibrary} title='Videos'/>

                <hr/>

                <LeftSideRow Icon={LocalHospital} title='Design Studio'/>
                <LeftSideRow Icon={EmojiFlags} title='IITR Memes'/>
                <LeftSideRow Icon={People} title='Indian Institute of Memology - Pawry'/>
                <LeftSideRow Icon={Chat} title='Indian Institute of Memology - Dank'/>
            </div>
            
            <div>
                <p>Privacy Terms Advertising Ad Choices</p>
                <p>Cookies More Facebook@2021</p>
            </div>
            
        </div>
    )
}

export default LeftSideBar
