import { LightningElement } from 'lwc';

export default class IfbWay2ExcelHeader extends LightningElement {
    month;
    fullMonth;
    shortMonth;
    shortYear;
    date;

    connectedCallback(){
        const date1=new Date();
        console.log(date1);
        this.date=date1.getDate();
        console.log('this.Date===>'+this.date);
        this.month=date1.getMonth()+1;
        console.log('this.month===>'+this.month);
        this.shortYear=date1.toISOString().slice(2,4);
        console.log('this.shortYear===>'+this.shortYear);

        if(this.month==1){
            this.fullMonth='01';
            this.shortMonth='Jan'
        }
        if(this.month==2){
            this.fullMonth='02';
            this.shortMonth='Feb'
        }
        if(this.month==3){
            this.fullMonth='03';
            this.shortMonth='Mar'
        }
        if(this.month==4){
            this.fullMonth='04';
            this.shortMonth='Apr'
        }
        if(this.month==5){
            this.fullMonth='05';
            this.shortMonth='May'
        }
        if(this.month==6){
            this.fullMonth='06';
            this.shortMonth='June'
        }
        if(this.month==7){
            this.fullMonth='07';
            this.shortMonth='July'
        }
        if(this.month==8){
            this.fullMonth='08';
            this.shortMonth='Aug'
        }
        if(this.month==9){
            this.fullMonth='09';
            this.shortMonth='Sept'
        }
        if(this.month==10){
            this.fullMonth='10';
            this.shortMonth='Oct'
        }
        if(this.month==11){
            this.fullMonth='11';
            this.shortMonth='Nov'
        }
        if(this.month==12){
            this.fullMonth='12';
            this.shortMonth='Dec'
        }


    }
}