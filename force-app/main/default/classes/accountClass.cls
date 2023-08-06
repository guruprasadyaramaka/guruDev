public with sharing class accountClass {
   @AuraEnabled(cacheable=true)
   public static List<Account> retrieveAccounts(){
    try {
        return [select id,Name,Type,BillingCountry from Account where Type !=NULL AND BillingCountry !=NULL];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
   @AuraEnabled(cacheable=true)
   Public Static List<Account> lazyLoadAccounts(){
       return [select id,Name,Type,Phone,CreatedDate,BillingCountry from Account LIMIT 50000];
   }
   
   @AuraEnabled(cacheable=true)
   Public Static List<accountWrapper> filterSearchAccounts(){
   system.debug('accList===>');
       List<Account> accList=[select id,Name,Type,Phone,CreatedDate,BillingCountry from Account LIMIT 50000];
       system.debug('accList===>'+accList);
       List<accountWrapper> accWrapper=New List<accountWrapper>();       
       for(Account acc:accList){
           accountWrapper acWrap=New accountWrapper();
           acWrap.accountId=acc.Id;
           acWrap.accountName=acc.Name;
           acWrap.accountType=acc.Type;
           acWrap.billingCountry=acc.billingCountry;
           acWrap.accountNameURL='/'+acc.Id;
           accWrapper.add(acWrap);
       }
       system.debug('accWrapper===>'+accWrapper);
       return accWrapper;
   }
   
   @AuraEnabled(cacheable=true)
   Public Static List<Account> fetchAccounts(){
       return [SELECT Id, Name, BillingPostalCode, BillingCountry 
                FROM Account LIMIT 10];
   }
   @AuraEnabled (cacheable=true)
    public static List<Opportunity> fetchOpportunity(String accountId){
        return [SELECT Id, Name, Account.Name, AccountId, StageName, Amount, CloseDate 
                FROM Opportunity WHERE AccountId =:accountId LIMIT 10];       
    }
   
   private class accountWrapper{
   
       @AuraEnabled
       Public Id accountId;
       @AuraEnabled
       public String accountName;
       @AuraEnabled
       Public String accountType;
       @AuraEnabled
       Public String billingCountry;
       @AuraEnabled
       Public String accountNameURL;
   }
}