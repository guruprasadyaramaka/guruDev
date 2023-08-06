public class opportunitySelector {
    
    public static List<AggregateResult> openOppsByAccount(set<Id> accIds){
        return [select count(Id),accountId from Opportunity where isClosed=false AND  accountId IN: accIds Group by accountId];
    } 
}