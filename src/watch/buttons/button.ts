export abstract class Button {
    readonly id: string;
    protected element: Element;

    constructor(id: string, doc: Document){
        /*
            doc: html document
            id : id of the corresponding button in document
        */
        this.id = id;
        this.element = doc.getElementById(id);
    }

    getElement() {
        return this.element;
    }
}