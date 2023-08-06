import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AsyncJavaScript extends LightningElement {
    interVelTime = 2000;
    isLoading=false; 
    timeChange(event){
        this.interVelTime = event.detail.value;
       
    }
    handleClick(){
        console.log('i am in handle click');
        this.isLoading=true;
         setTimeout(() => {
            this.showToast();
            this.isLoading=false;
        }, this.interVelTime);
    }
    showToast() {
        const evt = new ShowToastEvent({
            title: 'Message',
            message: `You have successfully fired the notification after ${this.interVelTime}`,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}