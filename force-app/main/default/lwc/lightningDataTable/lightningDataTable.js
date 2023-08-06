import { LightningElement,track,wire,api } from 'lwc';
const COLUMNS=[
    {label:'Label',fieldName:'name'},
    {label:'Website',fieldName:'website',type:'url'},
    {label:'Balance',fieldName:'amount',type:'currency'},
    {label:'CloseAt',fieldName:'closeAt',type:'date'},
]
export default class LightningDataTable extends LightningElement {
    columns = COLUMNS
    data=[]
    rowOffset=0

    increaseRowOffset(){
        this.rowOffset +=100;
    }
}