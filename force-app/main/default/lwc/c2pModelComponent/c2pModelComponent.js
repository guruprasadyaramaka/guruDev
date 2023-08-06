import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler(){
        console.log('i am in Close Handler')
        const myEvent=new CustomEvent('close',{
           // detail:"This Message is Getting from Model"
           detail:{
               msg:"This Message is Getting from Model"
           }
        })
        this.dispatchEvent(myEvent)
    }
}