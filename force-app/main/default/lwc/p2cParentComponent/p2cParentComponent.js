import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

     carouselData=[
         
         {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Set",
            description:"First Set Description"
         },
         {
                src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
                    header:"Second Set",
                    description : "Second Set description."
         },
         {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
                    header: "Third Set",
                    description: "Third Set description."
         }
     ]

     percentage=10;

     handlePercentage(event){
         this.percentage=event.target.value;
     }

     handleRestSlider(){
         console.log('i am here')
         this.template.querySelector('c-p2c-slider-component').resetHandler()
         //this.template.querySelector('c-p2c-slider-component').resetSlider()
     }
     
                
   
}