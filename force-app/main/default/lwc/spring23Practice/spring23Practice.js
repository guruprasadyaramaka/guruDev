import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
export default class Spring23Practice extends LightningElement {
    variable=false;
    showbuttonLabel=true
    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }
    handleClick(){
        this.showbuttonLabel = !this.showbuttonLabel;
         this.variable = !this.variable;
    }
    get buttonLabel(){
        return this.showbuttonLabel ? 'Expand' : 'Reduce';
    }
}