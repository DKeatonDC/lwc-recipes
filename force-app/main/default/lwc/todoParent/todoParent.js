import { LightningElement } from 'lwc';

export default class TodoParent extends LightningElement {
    textValue;
    handleText(event){
this.textValue = event.target.value;
    }
    //this sets the value for parenttext on the child
    handleChildText(event){
        this.template.querySelector('c-todo-item').handleText(event);
    }
    //this calls handleText on the child.  Note that that
    //is a different function than the one on this page
}