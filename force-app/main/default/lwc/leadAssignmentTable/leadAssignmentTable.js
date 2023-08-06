import { LightningElement,wire } from 'lwc';
import initialLeads from '@salesforce/apex/leadReAssignment.initialLeads';

const COLUMNS = [
    { label: 'Lead Name', fieldName: 'Name', type: 'text' },   
    { label: 'Email ID', fieldName: 'Email', type: 'email' },
    { label: 'Lead Source', fieldName: 'leadSource', type: 'text' }
];
export default class LeadAssignmentTable extends LightningElement {

    initianLeads;
    error;
    columns=COLUMNS;
    @wire(initialLeads)
    wiredLeads({ error, data }) {
        if (data) {
            this.initianLeads = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.initianLeads = undefined;
        }
    }
    getSelectedName(event){
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++) {
            alert('You selected: ' + selectedRows[i].Id);
        }
    }
}