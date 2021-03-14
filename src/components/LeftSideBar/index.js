import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './LeftSideBar.css'
import LeftSideRow from '../LeftSideRow/';
import { LocalHospital, EmojiFlags, People, Chat, Storefront, VideoLibrary, BurstModeOutlined, BurstMode, DevicesOther, PeopleOutlined } from "@material-ui/icons";
import Holt from '../../images/holt.jpg'

function LeftSideBar() {
    const username = 'Holt';

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
                <h3>Your shortcuts</h3>
                <LeftSideRow Icon={DevicesOther} title='Design Studio'/>
                <LeftSideRow Icon={PeopleOutlined} title='IITR Memes'/>
                <LeftSideRow Icon={BurstModeOutlined} title='Indian Institute of Memology - Pawry'/>
                <LeftSideRow Icon={BurstMode} title='Indian Institute of Memology - Dank'/>
            </div>
            
            <div className='footer'>
                <span>Privacy</span> <span>Terms</span> <span>Advertising</span> <span>Ad Choices</span>
                <br/><span>Cookies</span> <span>More</span> <span>Facebook@2021</span>
            </div>
            
        </div>
    )
}

export default LeftSideBar
