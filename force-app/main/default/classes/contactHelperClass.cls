Public with sharing class contactHelperClass{

 Public static void deletedCountOfContacts(List<Id> accIds){
   
   List<Account> accList=[select id,deletedContactCount__c  from Account where Id IN:accIds];
   system.debug('accList===>'+accList);
   if(accList.size()>0){
   
   for(Account acc:accList){
   if(acc.deletedContactCount__c == NULL){
   acc.deletedContactCount__c =1;
   }else{
   acc.deletedContactCount__c =acc.deletedContactCount__c + 1;
   }
   
   
   }
   
   Database.SaveResult[] result=Database.Update(accList,false);
   }
 
 }
}