//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
    date = new Date(0, 0);
    constructor(hour, minute = 0) {
        this.hour = hour;
        this.minute = minute;
        this.date;


    }

    toString() {
        this.date.setTime(this.hour, this.minute).to;
    }

    plus() {
        throw new Error('Remove this statement and implement this function');
    }

    minus() {
        throw new Error('Remove this statement and implement this function');
    }

    equals() {
        throw new Error('Remove this statement and implement this function');
    }
}