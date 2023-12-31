import { LightningElement,track } from 'lwc';
import fetchApexClass from '@salesforce/apex/apexClassExplorerController.fetchApexClass';

export default class ApexClassExplorer extends LightningElement {
    /** The delay used when debouncing event handlers before invoking Apex. */
    //const DELAY = 350;
    @track apexClasses;
    error;
    
    handleKeyChange(event) {
         // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            fetchApexClass({ searchKey: searchKey })
                .then((result) => {
                     result.forEach(element => {
                        console.log(element)
                        element.showCode = false;
                    });
                    console.log(result)
                    this.apexClasses = result;
                    this.error = undefined;
                })
                .catch((error) => {
                    this.error = error;
                    this.apexClasses = undefined;
                });
        }, 350);
    }
    handleEdit(event) {
        console.log(event.target.dataset.url);
        const url = window.location.origin + '/' + event.target.dataset.url;
        window.open(url);
    }
    handleView(event){
        console.log(event.target.dataset.id);
        const dataid = event.target.dataset.id;
        this.apexClasses=this.apexClasses.map(x=>{
            if (x.Id == dataid) {
                x.showCode = true;
            }
            return x;
        });
    }
    handleHide(event){
        const dataid = event.target.dataset.id;
        this.apexClasses=this.apexClasses.map(x=>{
            if(x.id==dataid){
                x.showCode = false;
            }
        })
    }
}