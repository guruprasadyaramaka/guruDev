public class taskTriggerHandler {    
    public static void primaryTaskCheck(List<Task> taskList){
        List<String> caseIds = New List<String>();
        for(Task tsk:taskList){
            //if(tsk.whatId !=NULL && String.valueOf(tsk.whatId).startsWith('500')){
                caseIds.add(tsk.WhatId);
            //}            
        }
        if(caseIds.size()>0){
            Map<Id,Case> caseMap=new map<Id,Case>([select id,TaskID__c,(select id,Primary__c from Tasks order by lastModifiedDate desc) from Case where ID in:caseIds]);
            List<Case> caseListToUpdate = new List<Case>();
            for(Case cs:caseMap.values()){
                List<Task> tasks=cs.tasks; 
                if (!tasks.isEmpty()) {
                    Task latestTask = tasks[0];
                    Decimal latestTaskIdAsDecimal = Decimal.valueOf(latestTask.Id);
                    //Decimal latestTaskIdAsDecimal = Decimal.valueOf(latestTask.yourTaskNumber);
                    if (cs.TaskID__c != latestTaskIdAsDecimal) {
                        cs.TaskID__c = latestTaskIdAsDecimal;
                        //cs.yourFieldOnCase = latestTaskIdAsDecimal;
                        caseListToUpdate.add(cs);
                    } 
                }
            }
            update caseListToUpdate;
        }       
    }
}