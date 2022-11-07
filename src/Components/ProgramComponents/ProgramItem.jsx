import React from 'react';
import GetDateConstants from '../../Constants/GetDateConstants';
import './ProgramItem.scss';

const ProgramItem = (props) => {
    const dateConstants = GetDateConstants();
    const programStart = new Date(props.timeStart);
    const programEnds =new Date(props.timeEnd);

    const getMinsDuration = () => {
        const programDuration = ((programEnds.getHours() * dateConstants.minutesPerHour) + (programEnds.getMinutes())) - 
            ((programStart.getHours() * dateConstants.minutesPerHour) + (programStart.getMinutes()));

        return programDuration
    };

    const programSize = getMinsDuration() * dateConstants.pxPerMinute;

    const getProgramSchedule = () => {
        const startTime = programStart.toLocaleTimeString(undefined, {
            hour:   '2-digit',
            minute: '2-digit',
        });

        const endTime = programEnds.toLocaleTimeString(undefined, {
            hour:   '2-digit',
            minute: '2-digit',
        }); 

        return (startTime + '-' + endTime)
    };

    const isShowLive = () => {
        const now = new Date();
        if (now > programStart && now < programEnds) {
            return 'program-item__live'
        }
        return 'program-item';
    };

    return (
        <div id='program-item' className={isShowLive()} style={{ width: programSize}}>
            <h5 className='program-title'>
                {props.title}
            </h5>
            <p className='program-schedule'>{getProgramSchedule()}</p>
        </div>
    )
            
    
}
export default ProgramItem;