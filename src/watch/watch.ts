import { IncreaseButton } from "./buttons/increase-button";
import { LightButton } from "./buttons/light-button";
import { ModeButton } from "./buttons/mode-button";
import { Time } from "./time/time";
import { DisplayTime } from "./display/displayTime";
import { ResetButton } from "./buttons/reset-button";
import { TimeFormatButton } from "./buttons/time-format-button";

export class Watch {
    display: DisplayTime;
    time: Time;
    modeButton: ModeButton;
    increaseButton: IncreaseButton;
    lightButton: LightButton;
    resetButton: ResetButton;
    timeFormatButton: TimeFormatButton;
    

    constructor(doc: Document, clockId: string, modeId: string, increaseId: string, lightId: string, resetId: string, timeFormatId: string, timeZone: number) {
        this.display = new DisplayTime(doc.getElementById(clockId));
        this.time = new Time(timeZone);
        this.modeButton = new ModeButton(modeId, doc);
        this.increaseButton = new IncreaseButton(increaseId, doc);
        this.lightButton = new LightButton(lightId, doc);
        this.resetButton = new ResetButton(resetId, doc);
        this.timeFormatButton = new TimeFormatButton(timeFormatId, doc);
    }

    runWatch() {
        this.display.startClock(this.time); // start the time
        // activate the different buttons
        this.lightButton.lightSwitch(this.display); 
        this.modeButton.changeMode(); 
        this.increaseButton.increaseTime(this.modeButton, this.time); 
        this.resetButton.resetTime(this.modeButton, this.time); 
        this.timeFormatButton.changeTimeToAMPM(this.modeButton, this.time); 
    }
    
}