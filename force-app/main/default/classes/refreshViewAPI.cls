public class refreshViewAPI {
	
    @AuraEnabled
    public static account getAccountRating(Id accountId){
        return [select id,rating from account where id =: accountId];
    }    	
 }