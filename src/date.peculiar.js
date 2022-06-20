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
        let min = (this.mins).toString();
        hr = Number(hr);
        const isPm = hr > 12 ? "pm" : "am";
        hr = hr > 12 ? hr - 12 : hr;
        min.length < 1 ? `0${min}` : min;
        hr = hr.toString();
        hr = hr.length < 1 ? `0${hr}` : hr;
        return `${hr}:${min} ${isPm}`;
    },
    get getDat() {
        let date = this._date;
        let dateS = date.toString();
        if (dateS.endsWith("1")) {
            dateS = `${date}st`;
        }
        else if (dateS.endsWith("2")) {
            dateS = `${date}nd`;
        }
        else if (dateS.endsWith("3")) {
            dateS = `${date}rd`;
        }
        else {
            dateS = `${date}th`;
        }
        let day = this.days[this.day];
        let dy = this.dys[this.day];
        let mon = this.months[this.mon];
        let month = this.months[this.mon];
        const nearS = `${dy}, ${dateS} of ${mon}`;
        const nearF = `${day}, ${dateS} of ${month}`;
        const farS = `${dy}, ${dateS} of ${mon},${this.year}`;
        const farF = `${day}, ${dateS} of ${month},${this.year}`;
        return {
            farS,
            farF,
            nearS,
            nearF
        };
    },
    get all() {
        return Object.values(this.getDat);
    },
    get longDate() {
        return this.all[0];
    },
    get longDateF() {
        return this.all[1];
    },
    get shortDate() {
        return this.all[2];
    },
    get shortDateF() {
        return this.all[3];
    }
};
export default PeculiarDate;
