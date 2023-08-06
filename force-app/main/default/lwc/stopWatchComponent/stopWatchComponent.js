import { LightningElement } from 'lwc';

export default class StopWatchComponent extends LightningElement {
    counter = 0
    timer='0'
    timerRef
    actionHandler(event){
        const {label} = event.target
        if(label === 'Start'){
            this.setTimer();
        }
        if(label === 'Stop'){    
            window.clearInterval(this.timerRef)
        }
        if(label === 'Reset'){
            this.counter = 0
            this.timer='0'
            window.clearInterval(this.timerRef)
        }
    }
    setTimer(){
        //setInterval(function() {element.innerHTML += "Hello"}, 1000);
        this.timerRef=window.setInterval(()=>{
            this.counter=this.counter+1
            this.timer=this.secondToHrs(this.counter)
        },1000)
    }

    secondToHrs(d){
        console.log('i am in here')
        d = Number(d)
        
        const h = Math.floor(d / 3600)
        const m = Math.floor(d % 3600 / 60)
        const s = Math.floor(d % 3600 % 60)
        
        const hDisplay = h > 0 ? h + (h == 1 ? " Hour, ": " Hours,") : "";
        const mDisplay = m > 0 ? m + (m == 1 ? " Minute, ": " Minutes,") : "";
        const sDisplay = s > 0 ? s + (s == 1 ? " Second, ": " Seconds,") : "";
        console.log(hDisplay+mDisplay+sDisplay)
        return hDisplay+mDisplay+sDisplay;
    }
}