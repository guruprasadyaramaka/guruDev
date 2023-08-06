//@isTest
public class TestDataFactoryDefaults {
	private static Id systemAdminProfileId = [SELECT Id FROM Profile WHERE Name = 'System Administrator' LIMIT 1].Id;
    /* Account RecordType */
    private static Id businessRecordTypeid = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Business').getRecordTypeId();
    private static Id partnerRecordTypeid = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Partner').getRecordTypeId();
    /* Accounts Based on RecordType */
    private static Map<schema.SObjectField,Object> businessAccountDefaults=New Map<schema.SObjectField,Object>
    {Account.Name =>'Business Account',Account.RecordTypeId => businessRecordTypeid};
    private static Map<schema.SObjectField,Object> partnerAccountDefaults=New Map<schema.SObjectField,Object>
    {Account.Name =>'Partner Account',Account.RecordTypeId => partnerRecordTypeid};    
        
    private static Map<schema.SObjectField,Object> contactDefaults=New Map<schema.SObjectField,Object>{Contact.FirstName =>'Test firstName',Contact.lastName =>'Test lastName'};
    //Creating the User
    public static Map<schema.SObjectField,Object> userDefaults=new Map<schema.SObjectField,Object>{
            user.Username => 'emailtest'+DateTime.now().getTime().format()+'@test.com',
            user.FirstName => 'First',
            user.LastName => 'Last',
            user.Alias => 'Alias',
            user.Email => 'emailtest@test.com',
            user.TimeZoneSidKey => 'America/New_York',
            user.LocaleSidKey => 'en_US',
            user.EmailEncodingKey => 'ISO-8859-1',
            user.ProfileId => systemAdminProfileId,
            //user.profileId => [SELECT Id FROM Profile WHERE Name = 'System Administrator' LIMIT 1].Id,
            user.LanguageLocaleKey => 'en_US'
        };       
    /*public static map<schema.SObjectType,Map<schema.SObjectField,object>> objectDefaultMap=New Map<schema.SObjectType,Map<schema.SObjectField,object>>{
            Account.sObjectType=>businessAccountDefaults,
            Account.sObjectType=>partnerAccountDefaults,    
            Contact.sObjectType=>contactDefaults,
            User.sObjectType => userDefaults   
        };*/
    public static map<schema.SObjectType,List<Map<schema.SObjectField,object>>> objectDefaultMap=New Map<schema.SObjectType,List<Map<schema.SObjectField,object>>>{
    Account.sObjectType=>new List<Map<schema.SObjectField,object>>{businessAccountDefaults, partnerAccountDefaults},    
    Contact.sObjectType=>new List<Map<schema.SObjectField,object>>{contactDefaults},
    User.sObjectType => new List<Map<schema.SObjectField,object>>{userDefaults}  
};
        
     public static Map<schema.SObjectField,Object> getDefaultValues(schema.SObjectType sObjType){
         system.debug('Object===>'+sObjType);
          //return objectDefaultMap.get(sObjType);
          return objectDefaultMap.get(sObjType).get(0);
         //system.Debug(objectDefaultMap.get(sObjType));
            }
    //system.debug('objectDefaultMap===>'+objectDefaultMap);
    /*Map<String, SObject> recordMap = new Map<String, SObject>();
    Map<SObjectField, Object> accountDefaults = TestDataFactoryDefaults.getDefaultValues(Account.sObjectType);
    Map<SObjectField, Object> contactDefaults = TestDataFactoryDefaults.getDefaultValues(Contact.sObjectType);
    
    Account newAccount = new Account(accountDefaults);
    Contact newContact = new Contact(contactDefaults);
    newContact.AccountId = newAccount.Id;
    
    recordMap.put(Account.sObjectType, newAccount);
    recordMap.put(Contact.sObjectType, newContact);
    
    insert recordMap;*/
    //For List Of records
    /*Map<String, List<SObject>> recordMap = new Map<String, List<SObject>>();
    List<SObject> accounts = new List<SObject>();
    List<SObject> contacts = new List<SObject>();
    
    for (int i = 0; i < 5; i++) {
        Map<SObjectField, Object> accountDefaults = TestDataFactoryDefaults.getDefaultValues(Account.sObjectType);
        Map<SObjectField, Object> contactDefaults = TestDataFactoryDefaults.getDefaultValues(Contact.sObjectType);
        
        Account newAccount = new Account(accountDefaults);
        Contact newContact = new Contact(contactDefaults);
        newContact.AccountId = newAccount.Id;
        
        accounts.add(newAccount);
        contacts.add(newContact);
    }
    
    recordMap.put(Account.sObjectType, accounts);
    recordMap.put(Contact.sObjectType, contacts);
    
    insert recordMap;*/

}