import { LightningElement } from 'lwc';

export default class IfbNewBranchVisit extends LightningElement {
    activeTab='1';
    checkUserRole=false;
    month;
    year;
    currentTime;
    day;

    connectedCallback(){
        this.currentTime = new Date();
        this.month=this.currentTime.toLocaleString('default',{month:'long'});
        this.day=this.currentTime.getDate();
        this.year=this.currentTime.toLocaleString('default',{year:'2-digit'});
    }
    handleActive(event){
        this.activeTab=event.target.value
    }
    exportContactData(){
        
    }
}