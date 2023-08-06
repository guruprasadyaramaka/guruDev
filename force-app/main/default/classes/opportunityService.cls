public class opportunityService {

    public static void rollupOpenOptysOnAccount(set<Id> accIds){
        List<Account> accList=New List<Account>();
        for(AggregateResult ar:opportunitySelector.openOppsByAccount(accIds)){
            Account acc=New Account();
            acc.id = (Id)ar.get('accountId');
            acc.NoOfOpenOpportunitys__c = (Decimal)ar.get('expr0');
            accList.add(acc);
        }
        update accList;
    }
}