import { LightningElement } from 'lwc';
import lazyLoadAccounts from '@salesforce/apex/accountClass.lazyLoadAccounts';

const columns=[
    {label : "Account Name" , fieldName: "linkAccount", type : "url",
               typeAttributes : {
                label : {fieldName : "Name"},
                target:"_blank"
               } 
            },
    {label : "Type" , fieldName : "Type" ,type:"text"},
    {label : "Phone", fieldName : "Phone" , type : "text"}
    /*{label : "Created Date", fieldName : "createdDate", type : "date",
            typeAttributes : {
                day : "numeric",
                month : "numeric",
                year : "numeric"
            }
    }  */      
];
export default class LwcLazyLoading extends LightningElement {
    columns = columns;
    data=[];
    items = [];
    totalRecountCount = 0;
    targetDatatable; // capture the loadmore event to fetch data and stop infinite loading
    recordCount = 5;
    loadMoreStatus;
    error;
    connectedCallback(){
        this.getData();
    }
    getData(){
        lazyLoadAccounts({})
        .then(result =>{
            //console.log(result);
            result = JSON.parse(JSON.stringify(result));
           // console.log(result);            
            result.forEach(record=>{
               // console.log(record);
                record.linkAccount = '/'+record.Id;
            });
           this.totalRecountCount = result.length;
           this.items=[...this.items,...result];
           this.data = this.items.slice(0, this.recordCount);
           console.log(this.data); 
           this.error = undefined;
            /*for (let i = 0; i < result.length; i++) {
                console.log('i am another loop');
                console.log(result[i]);
              }*/
        }).catch(error=>{
            this.error=error;
            console.error(this.error); 
            this.data=undefined;
            this.items=undefined;
        });
    }
    getRecords() {
        this.recordCount = (this.recordCount > this.totalRecountCount) ? this.totalRecountCount : this.recordCount; 
        this.data = this.items.slice(0, this.recordCount);
        this.loadMoreStatus = '';
        if (this.targetDatatable){
            this.targetDatatable.isLoading = false;
        }
    }
    handleLoadMore(event){
        console.log('i am in more');
        event.preventDefault();
        this.recordCount = this.recordCount + 5;
        //Display a spinner to signal that data is being loaded
        event.target.isLoading = true;
        //Set the onloadmore event taraget to make it visible to imperative call response to apex
        //Set the onloadmore event taraget to make it visible to imperative call response to apex.
        this.targetDatatable = event.target;
        //Display "Loading" when more data is being loaded
        this.loadMoreStatus = 'Loading';
        // Get new set of records and append to this.data
        this.getRecords();
    }
}