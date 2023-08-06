public with sharing class apexClassExplorerController {
	@AuraEnabled
    Public Static List<ApexClass> fetchApexClass(String searchKey){
        String key='%'+searchKey+'%';
        try{
            return [SELECT Id, NamespacePrefix, Name, ApiVersion, Status, IsValid, BodyCrc, Body, LengthWithoutComments, CreatedDate, CreatedBy.Name, LastModifiedDate,
                    LastModifiedBy.Name, SystemModstamp FROM ApexClass WHERE Name LIKE :key];
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
        
    }
}