import './TimelineItem.scss';

const TimelineItem = (props) => {
    const getTimeline = () => {
        let timeline = [];
        for (let i = 0; i < 24; i++) {
            let hour = ('0' + i).slice(-2) + ':00';
            timeline.push(
            <div key={hour} className="time-hour">
                {hour}
            </div>
            );
        }
        return timeline;
    }

    return (
        <div className="timeline-style">
            <div id='marker' className="marker" style={{ left: props.position }} />
            {getTimeline()}
        </div>
    );
};

export default TimelineItem;

