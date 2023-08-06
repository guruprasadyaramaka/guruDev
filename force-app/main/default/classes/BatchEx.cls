public class BatchEx implements Database.Batchable <sObject>{
    
    public Database.QueryLocator start(Database.BatchableContext bc){
         return Database.getQueryLocator('select id,description from account');
        
    //public Iterable<sObject> start(Database.BatchableContext bc){
      // return Database.getQueryLocator('query');
    }
     
    public void execute(Database.BatchableContext bc,list<Account> l){
       // list<Account> Acclst=new list<Account>();
        for(Account a:l){
            a.Description='Batch Example';
        }
        update l;
    }
    public void Finish(Database.BatchableContext bc){
        
    }

}