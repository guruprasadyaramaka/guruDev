import { LightningElement,api,track,wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateContact extends LightningElement {
    objectApiName=CONTACT_OBJECT
    fields={
        nameField : NAME_FIELD,
        accountField : ACCOUNT_FIELD,
        emailField : EMAIL_FIELD
    }
    handleSuccess(event){
        //this.handleReset();
       this.showSuccessToast();
       this.closeComponent();
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Contact Created sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    handleReset(){
        const inputFields=this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field=>{
                field.reset()
            })
        }
    }
    closeComponent(){
        const myEvent=new CustomEvent('close')
        this.dispatchEvent(myEvent)
    }
}