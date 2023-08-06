public class opportunityTriggerHandler {
	
    public static void afterInsert(List<Opportunity> newOpps){
        set<Id> accIds=New Set<Id>();
        for(opportunity opp:newOpps){
            if(opp.AccountId !=NULL)
                accIds.add(opp.accountId);
        }
        opportunityService.rollupOpenOptysOnAccount(accIds);
    }
    public static void afterUpdate(List<Opportunity> newOpps,Map<Id,Opportunity> oldOptyMap){
        
    }
    public static void afterDelete(List<Opportunity> oldOpps,Map<Id,Opportunity> oldOptyMap){
        
    }
}