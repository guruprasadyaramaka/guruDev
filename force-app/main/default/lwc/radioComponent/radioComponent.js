import { LightningElement } from 'lwc';

export default class RadioComponent extends LightningElement {
value = '';
isAccount=false
isContact
get options() {
        return [
            { label: 'Account Table', value: 'account' },
            { label: 'Contact Table', value: 'contact' },
        ];
    }
    handleChange(event){
        this.value=event.detail.value;      
        console.log('Option selected with value: ' +   this.value)
        if(this.value == 'account'){
           
            this.isAccount=true
             this.isContact=false           
        }else{
           
            this.isAccount=false
             this.isContact=true           
        }
    }
    closeAccComponenet(){
        this.isAccount=false
    }
    closeConComponenet(){
        this.isContact=false
    }

    
    

}