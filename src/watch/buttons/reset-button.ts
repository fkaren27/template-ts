import { Time } from "../time/time";
import { Button } from "./button";
import { ModeButton } from "./mode-button";

export class ResetButton extends Button {
    readonly id: string;
    protected element: Element;

    constructor(id: string, doc: Document){
        super(id, doc);
    }

    resetTime(mode: ModeButton, time: Time) {
        // reset time depending on mode value
        let that = this;
        this.element.addEventListener("click", function() {
            const modeState = mode.getModeState();
            if(modeState === 3){ 
                time.setResetState(true);
            } 
        })
    }
}