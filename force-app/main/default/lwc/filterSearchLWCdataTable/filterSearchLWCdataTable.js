import { LightningElement ,api,wire,track} from 'lwc';
import filterSearchAccounts from '@salesforce/apex/accountClass.filterSearchAccounts';
// Adding the URL to the Name field is done by another way from JS without wrapper
import lazyLoadAccounts from '@salesforce/apex/accountClass.lazyLoadAccounts';
/* const columns=[
    
    {label: 'Account Name', fieldName: 'accountNameURL', type: 'url', sortable: true, 
    typeAttributes: {label: { fieldName: 'accountName' },
    value:{fieldName: 'accountNameURL'}, 
    target: '_blank'}
},
        {label : 'Type' , fieldName:'accountType'},        
        {label : 'Billing Country', fieldName : 'billingCountry'}
    
] */
const columns=[
    
    {label: 'Account Name', fieldName: 'accountNameURL', type: 'url', sortable: true, 
    typeAttributes: {label: { fieldName: 'Name' },
    value:{fieldName: 'accountNameURL'}, 
    target: '_blank'}
},
        {label : 'Type' , fieldName:'Type'},        
        {label : 'Billing Country', fieldName : 'BillingCountry'}
    
]
export default class FilterSearchLWCdataTable extends LightningElement {
    @track data=[];
    @track error;
    @track columns = columns;
    searchString;
    initialRecords;
    @track items=[];
   // linkAccount;
   doneTypingInterval = 300;
   typingTimer;

    /* @wire(filterSearchAccounts)
    wiredAccounts({error,data}){
        if(data){
            console.log(data);
            this.data = data;
            this.error=undefined;
        }else if(error){
            console.error(error);
            this.data=undefined;
        }
    } */

    // Adding the URL to the Name field is done by another way from JS without wrapper
    @wire(lazyLoadAccounts)
    wiredAccounts({error,data}){
        if(data){
            console.log(data);
            let accountNameURL;
            this.initialRecords = data;
            this.data=data.map(row =>{
                //console.log(row);
                accountNameURL = `/${row.Id}`;
                return {...row , accountNameURL}; 
            });
            this.error=undefined;
        }else if(error){
            this.data=undefined;
            this.error=error;
        }
    }
        
    handleSearch(event){
        const searchKey = event.target.value.toLowerCase();
 
        if (searchKey) {
            this.data = this.initialRecords;
 
            if (this.data) {
                let searchRecords = [];
 
                for (let record of this.data) {
                    //console.log('i am at 77');
                    console.log(record);
                    let valuesArray = Object.values(record);
                    //console.log('i am at 80');
                    console.log(valuesArray);
                    for (let val of valuesArray) {
                        //console.log('val is ' + val);
                        let strVal = String(val);
 
                        if (strVal) {
 
                            if (strVal.toLowerCase().includes(searchKey)) {
                                searchRecords.push(record);                                
                                break;
                            }
                        }
                    }
                }
 
                console.log('Matched Accounts are ' + JSON.stringify(searchRecords));
                let ser=JSON.parse(JSON.stringify(searchRecords));
                console.log(ser);
                let DataSet=[];
                //record.linkAccount = '/'+record.Id;
                this.data = ser.forEach(acc=>{
                    console.log('i am in LOOP')
                    console.log(acc.Id);
                    acc.accountNameURL = '/'+acc.Id;
                });
                /* this.items=[...this.items,...result];
                //this.data = searchRecords;
                this.data= this.items; */
            }
        } else {
            console.log('i am in else statement');
            let dataSet=this.initialRecords.map(row =>{
                //console.log(row);
                accountNameURL = `/${row.Id}`;
                return {...row , accountNameURL}; 
            });
            console.log(dataSet);
            //this.data = this.initialRecords;
            this.data=dataSet;
            this.error=undefined;
        }   
    }
}