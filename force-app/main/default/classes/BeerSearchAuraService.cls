public class BeerSearchAuraService {

    @AuraEnabled
    public static list<sObject> searchBeer(string searchParam){
        string likeParam = '%'+searchParam+'%';
        string query='';
            if(searchParam !=null){
              query='select id,name,Alcohol__c,Brewery_Name__c,Id__c,Price__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c Beer__c where Name like:likeParam limit 10';  
            }else{
               query='select id,name,Alcohol__c,Brewery_Name__c,Id__c,Price__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c from Beer__c  limit 10'; 
            }
     
        list<sObject> sObjectList=Database.query(query);
        return sObjectList;
    }
}