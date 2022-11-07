import './DateItem.scss';

const DateItem = () => {
    const currentDay = (days) => {
        let today = new Date();
        today.setDate(today.getDate() + days);

        const getMonthNumber = today.getMonth() + 1;
        const getToday = today.getDate();

        const month = getMonthNumber > 9 ? getMonthNumber : '0' + (getMonthNumber);
        const dateDay = getToday > 9 ? getToday : '0' + getToday;
        const dayString = today.toString().split(' ')[0];

        return (
            <a key={days} id="date-item">
                <span className="date-item__day">{dayString}</span>
                <br />
                <span className="date-item__day_month">{`${dateDay}.${month}.`}</span>
            </a>
        );
    }
    return (
        <div className="date_item-wrapper">
            {[-2, -1, 0, 1, 2].map((days) => currentDay(days))}
        </div>
    );
};

export default DateItem;