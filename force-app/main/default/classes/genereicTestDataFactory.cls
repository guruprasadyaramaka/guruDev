public class genereicTestDataFactory {
    List<SObject> accounts = new List<SObject>();
    List<SObject> contacts = new List<SObject>();
    
    public void insertRecords(integer count) {
        for(integer i = 0; i < count; i++) {
            Map<SObjectField, Object> accountDefaults = TestDataFactoryDefaults.getDefaultValues(Account.sObjectType);
            Map<SObjectField, Object> contactDefaults = TestDataFactoryDefaults.getDefaultValues(Contact.sObjectType);
            
            Account newAccount = new Account(Name = (String)accountDefaults.get(Account.Name));
            Contact newContact = new Contact(FirstName = (String)contactDefaults.get(Contact.FirstName),
                                            LastName = (String)contactDefaults.get(Contact.LastName));
            newContact.AccountId = newAccount.Id;
            
            accounts.add(newAccount);
            contacts.add(newContact);
        }
        
        try {
            insert accounts;
            insert contacts;
        } catch (Exception e) {
            System.debug('Error inserting records: ' + e.getMessage());
        }
    }
}