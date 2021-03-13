import React from 'react'
import './Navbar.css'
import Logo from '../../images/fb_logo.png'
import SearchIcon from '@material-ui/icons/Search'
import { Home, Flag, SubscriptionsOutlined, StorefrontOutlined, SupervisedUserCircleOutlined, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import Holt from '../../images/holt.jpg'

function navbar() {
    const username = 'Holt';

    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img src={Logo} height='40px' alt='Logo'/>
                <div className='navbar__input'>
                    <SearchIcon/>
                    <input placeholder='Search Fakepoop' type='text'/>
                </div>
            </div>

            <div className='navbar__center'>
                <div className='navbar__option navbar__option--active'>
                    <Home fontSize='large' />
                </div>
                <div className='navbar__option'>
                    <Flag fontSize='large' />
                </div>
                <div className='navbar__option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>
                <div className='navbar__option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='navbar__option'>
                    <SupervisedUserCircleOutlined fontSize='large' />
                </div>
            </div>

            <div className='navbar__right'>
                <div className='navbar__info'>
                    <Avatar src={Holt} />
                    <h4>{username}</h4>
                </div>

                <IconButton style={{margin:'0px 10px'}}>
                    <Add/>
                </IconButton>
                <IconButton style={{margin:'0px 10px'}}>
                    <Forum/>
                </IconButton>
                <IconButton style={{margin:'0px 10px'}}>
                    <NotificationsActive/>
                </IconButton>
                <IconButton style={{margin:'0px 10px'}}>
                    <ExpandMore/>
                </IconButton>
            </div>
        </div>
    )
}

export default navbar
