import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    _uppercaseItemName;
    itemname="betty";
    @api
    handleText(event){this.itemname=event.target.value}
    @api 
    get itemname(){
        return this._uppercaseItemName;
    }
    set itemname(value){
        this._uppercaseItemName = value.toUpperCase();
    }
    @api 
    parenttext="placeholder";
}