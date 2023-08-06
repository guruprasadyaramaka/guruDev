import { LightningElement,api,track,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateAccount extends LightningElement {
     isCreated
    objectApiName=ACCOUNT_OBJECT;
    fields={
        nameField : NAME_FIELD,
        typeField : TYPE_FIELD,
        industryField : INDUSTRY_FIELD,
        phoneField : PHONE_FIELD
    }
    handleSuccess(event){
        //this.handleReset();
       this.showSuccessToast();
       this.closeComponent();
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Account Created sucessful',
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