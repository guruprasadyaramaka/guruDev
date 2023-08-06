import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val=20;

    changeHandler(event){
        this.val=event.target.value;
    }
    @api resetHandler(){
        console.log('i am in child')
        this.val=50
    }

}