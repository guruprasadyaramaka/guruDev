public with sharing class  OppListClass {
    
    public static list<oppListWrapper> oppwrapList{get; set;}
    
    public OppListClass(ApexPages.StandardController controller){
    }
    
        public static list<oppListWrapper> getoppListMethod(){
        oppwrapList=new list<oppListWrapper>();
        list<oppListWrapper> olist=new list<oppListWrapper>();
        set<Id> oppId=new set<Id>();
        list<opportunityLineItem> oppList=[select id, product2.name,Quantity,OpportunityId,Opportunity.name from opportunityLineItem];
        for(opportunityLineItem opl:oppList){
            oppId.add(opl.Opportunityid);
        }
        list<Opportunity> opList=[select id,AccountId,Account.name,name from opportunity where AccountId IN:oppId];
        for(opportunityLineItem oppl:oppList){
            olist.add(new oppListWrapper(oppl.Opportunity.name,'',oppl.Quantity,oppl.product2.name));
        }
        system.debug('oppwrapList<><><> '+oppwrapList);
        return oppwrapList;
        
    }

    public class oppListWrapper{
        string  oppName{get; set;}
        string accname{get; set;}
        decimal quantity{get; set;}
        string productName{get; set;}
        public oppListWrapper(string  oppName,string accname,decimal quantity,string productName){
          this.oppName=oppName;
            this.accname=accname;
            this.quantity=quantity;
            this.productName=productName;
        }
        
    }
}