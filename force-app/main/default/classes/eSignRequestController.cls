public with sharing class eSignRequestController {	
    @AuraEnabled
    Public static signReuest geteSignReuests(integer offsetValue){
        integer totalCount;
        signReuest sr=New signReuest();
		totalCount=[select count() from eSignRequest__c];        
        List<eSignRequest__c> eSigns= [select id,Name,SentOn__c,SentTo__c,SigningStatus__c from eSignRequest__c limit 10 offset :offsetValue];
        sr.eSignReqst=eSigns;
        sr.totalCount=totalCount;
        return sr;
    }        
        public class signReuest{
            @AuraEnabled
            public integer totalCount{get;set;}
             @AuraEnabled
            public List<eSignRequest__c> eSignReqst{get;set;}
        }     
}