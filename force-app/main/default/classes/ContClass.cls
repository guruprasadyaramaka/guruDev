public class ContClass {

    @AuraEnabled
    public static list<contact> getConList(string accountId){
        list<contact> conList=[select id,name,FirstName,LastName,AccountId,Email,Phone from contact where Email !=null AND Phone !=null AND AccountId=:accountId ];
        system.debug('conList<><><> '+conList);
        return conList;
         
    }
    @AuraEnabled
    public static contact createContact(contact con,id accountId){
        con.accountId=accountId;
        insert con;
        return con;
    }
   
}