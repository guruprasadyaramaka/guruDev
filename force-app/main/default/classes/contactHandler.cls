public class contactHandler {
    public static void beforeInsertCon(List<Id> newAccIds){
        if(newAccIds.size()>0){
            List<Account> accList=[Select Id,noOfContacts__c from Account where Id IN:newAccIds];
            if(accList.size()>0){
                for(Account acc:accList){
                    if(acc.noOfContacts__c == NULL){
                        acc.noOfContacts__c =1;
                    }else{
                        acc.noOfContacts__c +=1;
                    }                
                }
            }
            //Update accList;
            Database.SaveResult[] srList = Database.update(accList, false);
            for(Database.SaveResult sr:srList){
                if(sr.isSuccess()){
                    // Operation was successful, so get the ID of the record that was processed
                    System.debug('Successfully Updated account. Account ID: ' + sr.getId());
                }else{
                    // Operation failed, so get all errors                
                    for(Database.Error err : sr.getErrors()) {
                        System.debug('The following error has occurred.');                    
                        System.debug(err.getStatusCode() + ': ' + err.getMessage());
                        System.debug('Account fields that affected this error: ' + err.getFields());
                    }
                }
            }
        }        
    }
    public static  void beforeUpdate(List<Id> oldAccIds){
        if(oldAccIds.size()>0){
            List<Account> accList=[select id,noOfContacts__c from Account where Id IN:oldAccIds];       
            if(accList.Size()>0){
                for(Account acc:accList){
                    //acc.noOfContacts__c -=1;
                    acc.noOfContacts__c =acc.noOfContacts__c-1;
                }
            }
            //update accList;
            Database.SaveResult[] srList = Database.update(accList, false);
            for(Database.SaveResult sr:srList){
                if(sr.isSuccess()){
                    // Operation was successful, so get the ID of the record that was processed
                    System.debug('Successfully Updated account. Account ID: ' + sr.getId());
                }else{
                    // Operation failed, so get all errors                
                    for(Database.Error err : sr.getErrors()) {
                        System.debug('The following error has occurred.');                    
                        System.debug(err.getStatusCode() + ': ' + err.getMessage());
                        System.debug('Account fields that affected this error: ' + err.getFields());
                    }
                }
            }
        }        
    }
}