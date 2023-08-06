import { LightningElement,track,wire } from 'lwc';
import retrieveAccounts from '@salesforce/apex/accountClass.retrieveAccounts';

const columns=[
    {label : "Name" , fieldName : "Name"},
    {label : "Type" , fieldName : "Type"},
    {label : "Type" , fieldName : "BillingCountry"}
];
export default class SelectedRowsLWC extends LightningElement {
    @track data;
    @track columns=columns;
    @track error;

    @wire(retrieveAccounts)
    wiredAccounts({data,error}){
        if(data){
            console.log(data);
            this.data = data;
            this.error = undefined;
        }else if(error){
            this.data = undefined;
            this.error = error;
        }
    }
    getSelectedRec(){
        var selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();
        if(selectedRecords.length > 0){
            console.log('selected Records'+selectedRecords);
        }
    }
}