import { LightningElement,api,track,wire } from 'lwc';
import { registerRefreshHandler, unregisterRefreshHandler } from 'lightning/refresh';
import getAccountRating from'@salesforce/apex/refreshViewAPI.getAccountRating';
export default class RefreshViewAPI extends LightningElement {
    @api recordId;
    accountRating;
    refreshHandlerID;

    connectedCallback() {
        this.refreshHandlerID = registerRefreshHandler(this, this.refreshHandler);
        this.fetchRating();
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
    }
    refreshHandler(){
        console.log('Something has changed');
         return new Promise((resolve) => {
            this.fetchRating();
            resolve(true);
        });
    }
    fetchRating(){
        getAccountRating({"accountId" : this.recordId})
        .then( response=>{
            console.log(JSON.stringify(response));
            this.accountRating = response.Rating;
        }).catch(error=>{
            console.error(error)
        })
    }
}