public class ContactController {

    @AuraEnabled(cacheable=true)
    public static contact getSingleConatact(){
        return [select id,firstName,lastName from contact WITH USER_MODE LIMIT 1];
    }
}