import {
    LightningElement,
    api,
    track,
    wire
} from 'lwc';
import {
    NavigationMixin
} from 'lightning/navigation';
import yotiLogo from '@salesforce/resourceUrl/yotiLogo'
import geteSignReuests from '@salesforce/apex/eSignRequestController.geteSignReuests'
const COLS = [{
        label: 'Envelope Name',
        fieldName: 'Name',
        type: 'url',
        typeAttributes: {
            label: {
                fieldName: 'Name'
            },
            target: '_blank'
        }
    },
    {
        label: 'Sent to',
        fieldName: 'SentTo__c'
    },
    {
        label: 'Signing Status',
        fieldName: 'SigningStatus__c',
        type: 'Text',
        initialWidth: 10000
    }


];
export default class ESignRequest extends NavigationMixin(LightningElement) {

    yotiPhoto = yotiLogo;
    signed = 'Signed'
    @track recordsWrap = [];
    data;
    allData;
    error;
    @track columns = COLS;
    page = 1
    totalPage = 0
    startingRecord = 1;
    pageSize = 6;
    offset;
    isLoading = false;
    totalRecordCount;
    showPageNation = false;
    endingRecord = 0;
    showRecord = false;



    connectedCallback() {
        console.log('i am in connectedCallback');
        this.initialLoading();
    }
    initialLoading() {
        this.offset = 0;
        this.fetchEsignRequests(this.offset);
    }
    // Next Handler
    nextHandler() {
        this.isLoading = !this.isLoading;
        if ((this.page < this.totalPage) && this.page !== this.totalPage) {
            this.page = this.page + 1;
            console.log('this.page===>' + this.page)
            this.nextHandlerCall(this.page);
        } else {
            this.isLoading = false;
        }
    }
    nextHandlerCall(page) {
        this.startingRecord = ((page - 1) * this.pageSize);

        this.offset = this.startingRecord;
        this.fetchEsignRequests(this.offset);
    }

    // Previous Handler
    previousHandler() {

        this.isLoading = !this.isLoading;
        if (this.page > 1) {
            console.log('i am in previousHandler IF')
            this.page = this.page - 1;
            this.previousHandlerCall(this.page);
        } else {
            this.isLoading = false;
        }
    }
    previousHandlerCall(page) {
        console.log('i am in previousHandlerCall')
        this.offset = ((this.page * this.pageSize) - this.pageSize);
        console.log('this.offset===>' + this.offset)
        this.fetchEsignRequests(this.offset);
    }

    //function for fetching the Data
    fetchEsignRequests(offset) {
        //var isSigned;
        var styleColor;
        let mapResult = [];
        console.log('this.totalPage===>' + this.totalPage)
        geteSignReuests({
                offsetValue: offset
            })
            .then(result => {
                console.log(result);
                console.log('envelopURL===>' + result.envelopURL);
                this.allData = result.eSignReqst;
                for (var key in this.allData) {
                    mapResult.push({
                        key: key,
                        value: this.allData[key]
                    });

                }
                this.actualResults = mapResult.map(e => {
                    let isSigned = e.value.SigningStatus__c;
                    e.isSignedStyle = isSigned == 'Signed' ? this.signedStyleClass : this.notSignedStyleClass;
                    return e;
                });
                console.log('check below');
                console.log(mapResult);
                console.log(this.actualResults);
                this.isLoading = false;
                this.totalRecordCount = result.totalCount
                if (result.totalRecordCount > this.pageSize)
                    this.showPageNation = true;
                this.totalPage = Math.ceil(this.totalRecordCount / this.pageSize)
                //this.data=this.allData.slice(0,this.pageSize);


                this.data = this.actualResults.slice(0, this.pageSize);
                console.log(this.data)
                this.endingRecord = this.pageSize;
                if (this.allData.length >= 1)
                    this.showRecord = true;
                else
                    this.showRecord = false;
                this.error = undefined;
            })
            .catch(error => {
                console.log(error);
                this.error = error;
                this.allData = undefined;
            })

    }
    openURL() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'http://yoti.com'
                }
            },

        );
    }
    openRecord(event) {

        const itemIndex = event.currentTarget.dataset.index;
        const rowData = this.data[itemIndex];
        console.log(rowData);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: rowData.Id,
                objectApiName: 'eSignRequest__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
    get signedStyleClass() {
        return '&#9745;border-radius: 15px; background:#12AD2B; padding: 20px;'
        //return 'eSignRequest.css';
    }
    get notSignedStyleClass() {
        return 'background:#E5E4E2;border-radius: 15px;padding:20px;'
    }
}