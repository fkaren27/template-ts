import { Time } from "../time/time";
import { Button } from "./button";
import { ModeButton } from "./mode-button";

export class TimeFormatButton extends Button{
    readonly id: string;
    protected element: Element;

    constructor(id: string, doc: Document){
        super(id, doc);
    }

    changeTimeToAMPM(mode: ModeButton, time: Time) {
        // switches from 24h format to AM/PM format
        let that = this;
        this.element.addEventListener("click", function() {
            if(time.getTimeAmpmFormat() === true){ 
                time.setTimeAmpmFormat(false);
            } else {
                time.setTimeAmpmFormat(true);
            }
        })
    }




}