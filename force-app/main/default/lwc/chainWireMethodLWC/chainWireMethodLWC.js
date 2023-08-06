import { LightningElement,wire,track } from 'lwc';
import FETCH_ACCOUNTS from '@salesforce/apex/accountClass.fetchAccounts';
import FETCH_OPPORTNITIRS from '@salesforce/apex/accountClass.fetchOpportunity';

const columns=[
    {
        label:"Name",
        fieldName :"Name",
        type:"text"
    },
    {
        label:"Satge Name",
        fieldName :"StageName",
        type:"text"
    },
    {
        label:"Amount",
        fieldName :"Amount",
        type:"currency"
    }
]
export default class ChainWireMethodLWC extends LightningElement {
    @track accountId;
    @track opportunityList;
    columns=columns;

    @wire(FETCH_ACCOUNTS,{})
    wiredAccount({data,error}){
        if(data){
            console.log(data);
            this.accountId = data[0].Id;
        }else if(error){
            console.error(error);
        }
    }
    @wire(FETCH_OPPORTNITIRS,{accountId:'$accountId'})
    wiredOpportunity({error,data}){
        if(data){
            console.log(data);
            this.opportunityList = data;
        }else if(error){

        }
    }
}