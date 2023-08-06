import { LightningElement } from 'lwc';
import fetchSimpleMap from '@salesforce/apex/apexMapController.fetchSimpleMap';
import fetchListMap from '@salesforce/apex/apexMapController.fetchListMap';
import fetchNestedMap from '@salesforce/apex/apexMapController.fetchNestedMap';
export default class ApexMap extends LightningElement {

    simpleMap = [];
    simpleMapStr;
    showSimpleMapCard = false;
    showListMapCard = false;
    showNestedMapCard = false;

    handleLoadSimpleMap(){
        fetchSimpleMap().then((result) => {
            console.log(result);
            this.simpleMap = [];
            for (var key in result) {
                this.simpleMap.push({key:key,value:result[key]});
                console.log('key', key, result[key]);
                // code block to be executed
                // console.log(key);
                // console.log(result[key]);
              }
                this.simpleMapStr = JSON.stringify(result, null, 2);
                this.showSimpleMapCard = true;
                this.showListMapCard = false;
                this.showNestedMapCard = false;
        }).catch((error) => {
            console.log(error);
        });
    }
    handleLoadListMap(){
        fetchListMap().then((result) => {
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        }) 
    }
}