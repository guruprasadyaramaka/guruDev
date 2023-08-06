import { LightningElement,api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
export default class OpportunityClosedAction extends LightningElement {
    @api recordId
    @api invoke(){
        const fields = {}
        console.log('fields===>'+JSON.stringify(fields));
        console.log('this.recordId===>'+JSON.stringify(this.recordId));
        fields[ID_FIELD.fieldApiName]    = this.recordId;
        fields[STAGE_FIELD.fieldApiName] = 'Closed';        
        console.log('fields===>'+JSON.stringify(fields));
        const recordInput = {fields};
        console.log('invoke action gets called');
        updateRecord(recordInput)
        .then(() => {
            this.showToast('Success!!','Record Updated Successfully','success');
        })
        .catch(error =>{
            console.log('Error'+console.error);
        })
    }
    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({title,message,variant}))
    }
}