const PeculiarDate = {
    date: new Date(),
    get hrs() {
        return Number(this.date.getHours());
    },
    get mins() {
        return Number(this.date.getMinutes());
    },
    get secs() {
        return Number(this.date.getSeconds());
    },
    get day() {
        return Number(this.date.getDay());
    },
    get _date() {
        return Number(this.date.getDate());
    },
    get year() {
        return Number(this.date.getFullYear());
    },
    get mon() {
        return Number(this.date.getMonth());
    },
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    mons: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    dys: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    get getTime() {
        let hr = this.hrs;
        let min = new String(this.mins);
        hr = Number(hr);
        const isPm = hr > 12 ? "pm" : "am";
        hr = hr > 12 ? hr - 12 : hr;
        min.length > 0 ? `0${min}` : min;
        hr = new String(hr);
        hr = hr.length > 0 ? `0${hr}` : hr;
        return `${hr}:${min} ${isPm}`;
    },
    get getDat() {
        return "]]€";
    }
};
export default PeculiarDate;
