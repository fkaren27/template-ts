import { Time } from "../time/time";
import { Button } from "./button";
import { ModeButton } from "./mode-button";

//let increaseMode = 0;
export class IncreaseButton extends Button {
    readonly id: string;
    protected element: Element;

    constructor(id: string, doc: Document){
        super(id, doc);
    }

    increaseTime(mode: ModeButton, time: Time) {
        // increase hour or minute of time depending on mode
        let that = this;
        this.element.addEventListener("click", function() {
            const modeState = mode.getModeState();
            if(modeState != 3){ 
                time.setResetState(false);
                if(modeState == 1){ // mode increase hour
                    time.incrementHours(1); 
                } else if(modeState == 2){ // mode increase minute
                    time.incrementMinutes(1);
                }
            } 
        })
    }
}