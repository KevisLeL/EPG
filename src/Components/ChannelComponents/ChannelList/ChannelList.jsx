import React, { useState, useEffect } from 'react';
import GetDateConstants from '../../../Constants/GetDateConstants';
import ChannelItem from '../ChannelItem/ChannelItem';
import DateItem from '../../DateComponents/DateHeader/DateItem';
import TimelineItem from '../../DateComponents/TimelineHeader/TimelineItem';
import ChannelSidebar from '../../UIElements/Sidebars/Channels/ChannelSidebar';
import './ChannelList.scss';

const ChannelList = (props) => {
    const dateConstants = GetDateConstants();

    const getDatePosition = () => {
        const now = new Date();
        return (now.getHours() * dateConstants.pxPerHour) + (now.getMinutes() * dateConstants.pxPerMinute);
    }
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setInterval(() => {
            updateMarker();
        }, 60000)
    }, [position]);

    const updateMarker = () => {
        let updatedTime = getDatePosition() + dateConstants.pxPerMinute;
        setPosition(updatedTime);
    }

    const scrollToTime = (time) => {
        const content = document.getElementById('content');
        content.scroll({
            left: time - 600,
            behavior: 'smooth'
        });
    };

    const handleClickNow = () => {
        const updatedPosition = getDatePosition();
        setPosition(updatedPosition);
        scrollToTime(updatedPosition)
    };

    if (!props.items.channels || props.items.channels.length === 0) {
        return  <p>Could not find any channel.</p>;
    } else {
        return (
            <React.Fragment>
                <DateItem />
                <ChannelSidebar channels={props.items.channels} />
                <div id='content' className='content' style={{ right: `${position}px` }}>
                    <TimelineItem position={position} />
                    <div id='channel-item__wrapper'>
                    {props.items.channels && props.items.channels.map((channel, index) => (
                        <ChannelItem key={index} index={index} programs={channel.schedules} />
                        ))}
                    </div>
                <button
                    className="now-button"
                    onClick={() => handleClickNow()}
                >
                    NOW
                </button>
                </div>
            </React.Fragment>
        );
    }
};

export default ChannelList;