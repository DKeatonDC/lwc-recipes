import { LightningElement, api, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import TEXT_MESSAGE_CHANNEL from '@salesforce/messageChannel/Text_Message__c';
export default class TodoItem extends LightningElement {
    @wire(MessageContext)
    messageContext;
    
    // Encapsulate logic for LMS subscribe.
    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            TEXT_MESSAGE_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }
    _uppercaseItemName;
    exteriortext="set by child";
    itemname="set by child";
    //this will not appear in parent component because 
    //the parent reassigns the value
    handleMessage(message){this.exteriortext = message.exteriortext;} 
       // Standard lifecycle hooks used to sub/unsub to message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
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
    //the parent reassigns the value unless set by child.  
    //As seen above, I attemped using if statements, but this,
    //too would need to be set at the parent level (I believe).
}