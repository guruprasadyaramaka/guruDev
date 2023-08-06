import { LightningElement,wire,track } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
export default class WireGetObjectInfo extends LightningElement {
    objectApiNameInputValue = 'Account';
    objectApiName='Account'
    objectInfo;
    data
    fieldApiNameInputValue;
    fieldApiName;

    childRelationshipApiNameInputValue;
    childRelationShipApiName;

    @wire(getObjectInfo,{objectApiName : '$objectApiName'})
    objectInfo;

    objectNameChange(event){
        console.log(event.target.value);
        this.objectApiNameInputValue = event.target.value;
    }
    handleBtnClick() {
        this.objectApiName = this.objectApiNameInputValue;
    }
    fieldNameChange(event) {
        this.fieldApiNameInputValue = event.target.value;
    }
    get fieldOptions(){
        let fieldList = [];
        if(this.objectInfo){
            if(this.objectInfo.data){
                if(this.objectInfo.data.fields){
                    for(var i=0;i<Object.entries(this.objectInfo.data.fields).length;i++){
                        console.log(Object.entries(this.objectInfo.data.fields));
                        fieldList.push({
                            
                            label: Object.entries(this.objectInfo.data.fields)[i][0],
                            value: Object.entries(this.objectInfo.data.fields)[i][0]
                        });
                    }
                }
            }
        }
        return fieldList;
    }
    get objectInfoStr(){
        return this.objectInfo ? JSON.stringify(this.objectInfo.data,null,2) : '';
    }
    handleFieldBtnClick(){
        this.fieldApiName = this.fieldApiNameInputValue;
        this.fieldInformation();
    }
    get fieldInformation(){
        console.log('i am here');
        let fieldInfo;
        if(this.objectInfo){
            if(this.objectInfo.data){
                if(this.objectInfo.fields){
                    for(var i=0;i<Object.entries(this.objectInfo.data.fields).length; i++){
                        if(Object.entries(this.objectInfo.data.fields)[i][0] === this.fieldApiName){
                            console.log('i am in if condition');
                            fieldInfo = Object.entries(this.objectInfo.data.fields)[i][1];
                            break;
                        }
                    }
                }
            }
        }
        return fieldInfo
            ? JSON.stringify(fieldInfo, null, 2)
            : '';

            
    }
    get numberOfFileds(){
        if (this.objectInfo) {
            if (this.objectInfo.data) {
                if (this.objectInfo.data.fields) {
                    return Object.keys(this.objectInfo.data.fields).length;
                }
            }
        }
        return null;
    }
    get totalCustomField(){
        let count = 0;
        if(this.objectInfo){
            if(this.objectInfo.data){
                if(this.objectInfo.data.fields){
                    for(var i = 0; i < Object.entries(this.objectInfo.data.fields).length; i++){
                        if (Object.entries(this.objectInfo.data.fields)[i][1].custom === true){
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }
}