import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    _uppercaseItemName;
    itemname="set by child";
    //this will not appear in parent component because 
    //the parent reassigns the value
    @api
    handleText(event){this.itemname=event.target.value}
    //this function must be called by the parent. Changing
    //the value of {itemname} on the parent alone e.g.
    // <c-todo-item itemname={foo}> will not change the 
    //value of itemname on the child.  I believe that this
    // is because of the getter/setter conflicting
    //with the parent
    @api 
    get itemname(){
        return this._uppercaseItemName;
    }
    set itemname(value){
        this._uppercaseItemName = value.toUpperCase();
    }
    //the above allows things to appear uppercase including 
    //set by child
    @api 
    parenttext = null;
    if(parenttext = null){this.parenttext = "set by a child";}
    //this will not appear in parent component because 
    //the parent reassigns the value unless set by child
}