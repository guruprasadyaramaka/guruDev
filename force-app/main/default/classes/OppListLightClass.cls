public class OppListLightClass {

    @AuraEnabled
    public static list<opportunity> getOppList(){
        list<opportunity> oppList=[SELECT Id, Name,Amount, Account.Name FROM Opportunity WHERE AccountId != NULL and Amount !=null];
        return oppList;
    }
}