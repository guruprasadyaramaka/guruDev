//@isTest
public class TestDataFactory {
	
    public static sObject generateRecord(sObject obj){
        map<schema.SObjectField,object> defaultValues = TestDataFactoryDefaults.getDefaultValues(obj.getSObjectType());
        if(defaultValues !=NULL){
            populateFieldValues(obj,defaultValues);
        }
        return obj;
    }
    public static sObject populateFieldValues(sObject obj,map<schema.SObjectField,object> defaultValues){
        system.debug('defaultValues===>'+defaultValues);
        for(schema.SObjectField field:defaultValues.keySet()){
            obj.put(field, defaultValues.get(field));
        }
        return obj;
    } 
}