import { DisplayTime } from "../display/displayTime";
import { Button } from "./button";

export class LightButton extends Button {
    readonly id: string;
    protected element: Element;

    constructor(id: string, doc: Document){
        super(id, doc);
    }

    lightSwitch(display: DisplayTime){
        // changes the color of the display on click
        this.element.addEventListener("click", function handleclick() {display.getElement().classList.toggle('clock-nightmode')});
    }
}