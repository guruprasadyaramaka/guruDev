import { LightningElement,track,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactController.getSingleConatact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
export default class UpdateContact extends LightningElement {
    disabled = false;
   @track error

   @wire(getSingleContact)
   contact;

   handleChange(event){
       console.log(event.target.value);
       if(!event.target.value){
           //console.log('i am in IF condition');
            event.target.reportValidity();
            this.disabled = true;
       }else{
           //console.log('i am in ELSE condition');
            this.disabled = false;
       }
   }
   updateContact(){
       /*const allValid = [...this.template.template.querySelectorAll('lightning-input')]
       .reduce((validSoFar, inputFields) =>{
           inputFields.reportValidity();
          return validSoFar && inputFields.checkValidity();
       },true);*/
       console.log('inputFields'+JSON.stringify(this.template.querySelectorAll('lightning-input')));
       const allValid = [...this.template.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputFields) => {
                inputFields.reportValidity();
                return validSoFar && inputFields.checkValidity();
            }, true);
       if(allValid){
           console.log('i am in IF condition');
           const fields = {}
           fields[ID_FIELD.fieldApiName]  = this.contact.data.Id;
           fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field=FirstName]").value;
           fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field=LastName]").value;
           const recordInput = { fields };
           console.log(JSON.stringify(fields));
           updateRecord(recordInput)
           .then(() =>{
               this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact updated',
                            variant: 'success'
                        })
                    );
                    // Display fresh data in the form
                    //return refreshApex(this.contact);
           })
           .catch(error =>{
               this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error creating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
           });
       }
   }
}