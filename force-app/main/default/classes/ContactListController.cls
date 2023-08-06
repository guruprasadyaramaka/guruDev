public class ContactListController {
    
    @auraEnabled
    public static list<Contact> getContactList( string accountId){
        list<contact> conlst=new list<contact>([select id,accountId,LastName,FirstName,name,Email,phone
                                                from contact where accountId  =:accountId ]);
        return conlst; 
    }
    
}