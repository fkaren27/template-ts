import { Button } from "./button";

export class ModeButton extends Button {
    readonly id: string;
    protected element: any;
    private modeState: number; // values in {1,2,3}
                                // 1: increase hour mode, 2: increase minute mode, 3: reset mode, 4: no change mode

    constructor(id: string, doc: Document){
        super(id, doc); 
        this.modeState = 0;
    }

    getModeState() {
        return this.modeState;
    }

    changeMode() {
        // changes the mode on click
        let that = this;
        this.element.addEventListener("click", function() {
            if(that.modeState >= 4){
                that.modeState = 1;
            } else {
                that.modeState += 1;
            }
            console.log(that.modeState);
        })
    }
}