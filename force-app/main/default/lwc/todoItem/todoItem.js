import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    _uppercaseItemName;
    itemName="betty";
    handleText(event){this.itemName=event.target.value}
    @api 
    get itemName(){
        return this._uppercaseItemName;
    }
    set itemName(value){
        this._uppercaseItemName = value.toUpperCase();
    }
}