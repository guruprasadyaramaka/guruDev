public class leadReAssignment {
	
    @AuraEnabled(cacheable=true)
        public static List<Lead> initialLeads(){
        return [SELECT id, leadSource,Email,Name,owner.Name from Lead where leadSource !=NULL AND Email !=NULL Limit 100];
    }
}