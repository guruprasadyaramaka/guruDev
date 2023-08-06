import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class RecordEditForm extends LightningElement {
    nameField = NAME_FIELD;
    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
    showFields = true;


    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
    }

    /*myValue = 'My Account Name';
    overrideValue(event) {
        this.myValue = 'My New Name';
    }*/

    handleReset(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
         console.log('fieldsType===>'+typeof(inputFields));
        if(inputFields){
            inputFields.forEach(field => {
                console.log('field===>'+JSON.stringify(field));
                 field.reset();
            });
        }
    }
    toggleFields() {
        this.showFields = !this.showFields;
    }
}