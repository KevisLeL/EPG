import React from 'react';
import ProgramItem from '../../ProgramComponents/ProgramItem';
import './ChannelItem.scss';

const ChannelItem = (props) => {
    return (
        <React.Fragment>
            <ul className="channel-item">
                {props.programs && props.programs.map((program, index) => (
                    <ProgramItem key={index} index={index} id={program.id} title={program.title} timeStart={program.start} timeEnd={program.end} />
                ))}
            </ul>
        </React.Fragment>
    )
}

export default ChannelItem;