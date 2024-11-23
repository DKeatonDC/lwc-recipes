import { LightningElement } from 'lwc';

export default class TodoParent extends LightningElement {
    textValue;
    handleText(event){
this.textValue = event.target.value;
    }
    handleChildText(event){
        this.template.querySelector('c-todo-item').handleText(event);
    }
}