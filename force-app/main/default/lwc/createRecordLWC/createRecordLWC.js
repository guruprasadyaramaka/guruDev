import { LightningElement } from "lwc";

//1. Import the method "createRecord" which is a named import
import { createRecord } from "lightning/uiRecordApi";

//2. Import the reference to Object and Fields
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class ExploreCreateRecord extends LightningElement {

  name;
  industry;
  rating;
  fields = {};

    

  handleChange(event) {
      let {name,value} = event.target;
      this.fields[name]=value;
     // console.log('fieldNames--'+JSON.stringify(this.fields));
  }

  handleClick() {
  
    //3. Map the data to the fields
    
        console.log('fieldNames--'+JSON.stringify(this.fields));
        //4. Prepare config object with object and field API names 
    const recordInput = {
      apiName: ACCOUNT_OBJECT.objectApiName,
      fields: this.fields
    };
        
        //5. Invoke createRecord by passing the config object
    createRecord(recordInput)
    .then((record) => {
      console.log(record);
    }).catch(error=>{
        console.log('--error--'+error.body.message);
    });
  }
}