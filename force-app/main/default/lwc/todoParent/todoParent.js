import { LightningElement } from 'lwc';

export default class TodoParent extends LightningElement {
    textValue;
    handleText(event){
this.textValue = event.target.value;
    }
}