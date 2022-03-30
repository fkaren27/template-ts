import { Time } from "../time/time";

export class DisplayTime {
    private element: Element;
    
    
    constructor(element: Element){
        // element : clock element from an html document
        this.element = element;
    }

    
    startClock(time: Time): void {
        // update displayed time with updated time
        setInterval(() => {
            this.updateDisplay(time);
        }, 1);
    }

    updateDisplay(time: Time): void{
        const timeParts = time.updateTime();
        // format hour, minute, seconds to have 2 decimals
        const hoursFormatted = timeParts.hour.toString().padStart(2, "0");
        const minutesFormatted = timeParts.minute.toString().padStart(2, "0");
        const secondsFormatted = timeParts.second.toString().padStart(2, "0");

        // update the elements
        this.element.querySelector(".clock-hour").textContent = hoursFormatted;
        this.element.querySelector(".clock-minute").textContent = minutesFormatted;
        // if AM/PM format
        if(time.getTimeAmpmFormat() == true){
            this.element.querySelector(".clock-ampm").textContent = time.getAmpmValue();
            this.element.querySelector(".clock-second").textContent = '';
        } else {
            this.element.querySelector(".clock-ampm").textContent = '';
            this.element.querySelector(".clock-second").textContent = secondsFormatted;
        }
    }

    getElement() {
        return this.element;
    }

}