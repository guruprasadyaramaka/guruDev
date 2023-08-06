import { LightningElement,wire,api,track } from 'lwc';
export default class SipCalculator extends LightningElement {
      @track investValue = 500; //initial value
       @track investYears=5;
       @track interestRate=12;
       subtractButtonHidden=false;
       addButtonHidden=true;
       handleExpand(event){
           this.subtractButtonHidden=true;
            this.addButtonHidden=false;
             let  sectionName = event.target.name;
             console.log('sectionName: '+sectionName);
            let buttonId=this.template.querySelector('lightning-button');
            //console.log(buttonId);
       }
       handleMinimize(event){
           this.addButtonHidden=true;
            this.subtractButtonHidden=false;
             let  minimizesectionName = event.target.name;
             console.log('minimizesectionName: '+minimizesectionName)
       }
      
      //totalInvestment;
      investHandleChange(event) {
        this.investValue = event.detail.value;
         let slider = this.template.querySelector('lightning-slider');         
    }
    investYearHandleChange(event){
         this.investYears = event.detail.value;
         //calculateReturn();
    }
     /*get totalInvestment() {
        let totalInvestment = this.investValue;
        console.log(totalInvestment)
        let monthlyInterestRate = this.interestRate / 12 / 100;
        console.log(monthlyInterestRate)
        let monthlyInvestment = this.investValue;
        console.log(monthlyInvestment)
        for (let i = 0; i < this.investYears * 12; i++) {
            totalInvestment += monthlyInvestment ;
            console.log(totalInvestment)
            totalInvestment *= (1 + monthlyInterestRate);
            console.log(totalInvestment)
        }
        return Math.round(totalInvestment);
    }*/
    get totalReturnValue() {
        let totalReturnValue = this.investValue+this.investYears;
        return Math.round(totalReturnValue);
    }
    
}