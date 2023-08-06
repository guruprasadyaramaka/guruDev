import { LightningElement,api,wire,track } from 'lwc';
import GET_CONTACTS from '@salesforce/apex/accountHelper.getContacts'
export default class ContactTable extends LightningElement {
    @track columns=[{
            label : 'Name',
            fieldName : 'Name',
            type : 'text',
            sortable : true
    },{
            label : 'Email',
            fieldName : 'Email',
            type : 'text',
            sortable : true
    },{
            label : 'Phone',
            fieldName : 'Phone',
            type : 'phone',
            sortable : true
    }]

    @track error
    @track conList
    @wire(GET_CONTACTS)
    wiredAccounts({
        error,
        data
    }){
        if(data){
            console.log(data)
            this.conList=data;
        }else if(error){
            console.error(error)
            this.error=error
        }
      }

    }