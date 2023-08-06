public with sharing class accountHelper {
  
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){       
           List<Account> accList=New List<Account>();
           accList =[SELECT id,Name,Type,Rating, Phone from Account where 
           Name !=NULL AND Type !=NULL AND Rating !=NULL AND Phone !=NULL];
      		system.debug('accList===> '+accList);
   			return accList;
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> conList=New List<Contact>();
         conList=[select id,Name,Email,Phone from Contact where Email !=NULL AND Phone !=NULL];
       return conList;
    }
}
/*
 * if(record['Product_Type__c']=='SA'){
                    this.savingAc=this.savingAc+1;
                }
                if(record['Product_Type__c']=='CA'){
                    this.currentAc=this.currentAc+1;
                }
                //Added by Amandeep Patro
                if(record['Product_Type__c']=='Corp Sal'){
                    this.corpSalCounts=this.corpSalCounts+1;
                }
                if(record['Product_Type__c']=='LI'){
                    this.li=this.li+1;
                }
                if(record['Product_Type__c']=='GI'){
                    this.gi=this.gi+1;
                }
                if(record['Product_Type__c']=='SIP'){
                    this.sip=this.sip+1;
                }
                if(record['Product_Type__c']=='CC'){
                    this.creditcards=this.creditcards+1;
                }
                if(record['Product_Type__c']=='POS'){
                    this.pos=this.pos+1;
                }

                if(record['Product_Type__c']=='BBG-WC Sanction'){
                    this.bbgwcs=this.bbgwcs+1;
                }
                if(record['Product_Type__c']=='BBG-WC Disbursal'){
                    this.bbgwcd=this.bbgwcd+1;
                }
                if(record['Product_Type__c']=='HLLAP'){
                    this.hllap=this.hllap+1;
                }
                if(record['Product_Type__c']=='Other Assets'){
                    this.others=this.others+1;
                }*/