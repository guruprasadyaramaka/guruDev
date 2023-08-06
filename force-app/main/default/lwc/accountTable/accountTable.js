import { LightningElement,api,track,wire } from 'lwc';
import GET_ACCOUNTS from '@salesforce/apex/accountHelper.getAccounts'
export default class AccountTable extends LightningElement {
    @track columns=[{
        label : 'Account Name',
        fieldName : 'Name',
        type : 'text',
        sortable : true
},{
        label : 'Account Type',
        fieldName : 'Type',
        type : 'text',
        sortable : true
},{
        label : 'Account Rating',
        fieldName : 'Rating',
        type : 'text',
        sortable : true
},{
        label : 'Account Phone',
        fieldName : 'Phone',
        type : 'phone',
        sortable : true
}]

@track error
@track accList
@wire(GET_ACCOUNTS)
wiredAccounts({
    error,
    data
}){
    if(data){
        console.log(data)
        this.accList=data;
    }else if(error){
        console.error(error)
        this.error=error
    }
  }
}