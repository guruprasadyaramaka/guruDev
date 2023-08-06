import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false
    message
    showModel(){
        this.showModal=true
    }
    closeModel(event){
       // this.message=event.detail
       this.message=event.detail.msg
        this.showModal=false
    }
}