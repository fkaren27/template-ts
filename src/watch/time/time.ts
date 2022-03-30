export class Time {
    private hour: number;
    private minute: number;
    private second: number;
    private hoursAdded: number;
    private minutesAdded: number;
    private resetState: boolean;
    private timeAmpmFormat: boolean;
    private ampmValue: string;
    private timeZone: number;
    
    constructor(timeZone: number){
        //timeZone: (number) corresponding to added number to UTC time (GMT + timeZone)
        
        const now = new Date();
        this.hour = now.getUTCHours();
        this.minute = now.getUTCMinutes();
        this.second = now.getUTCSeconds();
        this.hoursAdded = 0;
        this.minutesAdded = 0;
        this.resetState = false;
        this.timeAmpmFormat = false;
        this.ampmValue = 'AM';
        this.timeZone = timeZone;
    }

    getHoursAdded() {
        return this.hoursAdded;
    }

    getMinutesAdded() {
        return this.minutesAdded;
    }

    getTimeAmpmFormat() {
        return this.timeAmpmFormat;
    }

    getAmpmValue() {
        return this.ampmValue;
    }

    setTimeZone(value: number) {
        this.timeZone = value;
    }

    setTimeAmpmFormat(value: boolean) {
        this.timeAmpmFormat = value;
    }

    incrementHours(value: number) {
        this.hoursAdded += value;
    }

    incrementMinutes(value: number) {
        this.minutesAdded += value;
    }

    setResetState(value: boolean) {
        this.resetState = value;
        if(this.resetState==true) {
            this.hoursAdded = 0;
            this.minutesAdded = 0;
        }
    }
    
    updateTime(): any {
        /* updates time
        return an object with 3 elements: hour, minute, second
        */
        const now = new Date();
        let newHour = Math.abs(now.getUTCHours() + this.hoursAdded + this.timeZone); 
        if(newHour > 23){
            this.hour = newHour % 24; // hour in range [0, 23]
        } else {
            this.hour = newHour;
        }
        let newMinute = now.getUTCMinutes() + this.minutesAdded;
        if(newMinute > 59){
            this.minute = newMinute % 60; // minutes in range [0, 59]
        } else {
            this.minute = newMinute;
        }
        if(this.timeAmpmFormat == true) {
            if(this.hour >= 12){
                this.ampmValue = 'PM';
            } else {
                this.ampmValue = 'AM';
            }
            this.hour = this.hour % 12;
            this.minute = this.minute % 12;
        }
        this.second = now.getUTCSeconds();
        let timeParts = {
            hour : this.hour,
            minute : this.minute,
            second :this.second
        }
        return timeParts;
    }
}