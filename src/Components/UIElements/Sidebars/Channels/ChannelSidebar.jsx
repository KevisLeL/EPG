import React from 'react';
import { MdFavorite } from 'react-icons/md';
import './ChannelSidebar.scss';

const ChannelSidebar = (props) => {
    return (
        <div className="sidenav">
            <div className='channel-sidebar__date'> 
                <MdFavorite size="3rem" className='heart-icon'/>
                <p>Favs</p>
            </div>
            <div className='channel-sidebar__timeline'> 
            </div>
            {props.channels.map((channel) => (
                <div className='channel-sidebar' key={channel.title}> 
                    {/* <img src={channel.images.logo} /> */}
                    <a href=''> 
                        {channel.title}
                    </a>
                </div>
            ))

            }
        </div>
    )
};

export default ChannelSidebar;



