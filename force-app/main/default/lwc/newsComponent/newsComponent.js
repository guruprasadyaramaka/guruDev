import { LightningElement ,track } from 'lwc';
import RETRIVE_NEWS from "@salesforce/apex/newsController.retriveNews";
export default class NewsComponent extends LightningElement {
    @track result = []

    connectedCallback(){
        this.fetchNews();
    }
    /****fetchNews method gets called on page load, and within this, 
     * we are calling the retriveNews apex method using apex imperative approach****/
     fetchNews(){
        RETRIVE_NEWS().then(response=>{
            console.log(response);
            this.formatNewsData(response.articles)
        }).catch(error=>{
            console.error(error);
        })
    }
    /****formatNewsData method structuring the response we are getting 
     * from the apex method by adding the id, name and date  ****/
     formatNewsData(res){
        this.result = res.map((item, index)=>{
            let id = `new_${index+1}`;
            let date = new Date(item.publishedAt).toDateString()
            let name = item.source.name;
            return { ...item, id: id, name: name, date: date}
        })

    }
}