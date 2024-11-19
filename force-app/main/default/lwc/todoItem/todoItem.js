import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    _uppercaseItemName;
    itemName="betty";

    @api 
    get itemName(){
        return this._uppercaseItemName;
    }
    set itemName(value){
        this._uppercaseItemName = value.toUpperCase();
    }
}