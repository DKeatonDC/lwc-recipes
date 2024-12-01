import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TEXT_MESSAGE_CHANNEL from '@salesforce/messageChannel/Text_Message__c';


export default class ToDoPublisher extends LightningElement {
    placeholder;
    @wire(MessageContext)
    messageContext;
    handleTextInput(event){
        const payload = {textVar: event.target.value};
        publish(this.messageContext, TEXT_MESSAGE_CHANNEL, payload);
        this.placeholder = event.target.value;
    }
}