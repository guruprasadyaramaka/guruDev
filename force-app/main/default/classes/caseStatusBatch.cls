global class  caseStatusBatch implements Database.Batchable<sObject>,Database.stateful{
	
    global Database.QueryLocator Start(Database.BatchableContext bc){
        system.debug('i am in Start Method');
        List<String> caseStatus=(system.label.caseStatus).split(',');
        system.debug('querry===>'+system.label.caseStatusQuery);
        return Database.getQueryLocator(system.label.caseStatusQuery);
        /*
         *  In the above system.label.caseStatusQuery we are having one IN condition of IN:caseStatus,
         *  we have to create the List<String> that matches the value of IN condition variable, in this case its caseStatus
         *  Actual querry - SELECT Id,Status,accountId from Case where status IN:caseStatus 
		*/
    }
    global  void execute(Database.BatchableContext bc,List<Case> sObjList){
        system.debug('i am in Execute Method');
        for(Case cs:sObjList){
            system.debug('cs.Id===>'+cs.Id);
        }
    }
    global void finish(Database.BatchableContext bc){
        AsyncApexJob job = [SELECT Id, Status, NumberOfErrors, 
                            JobItemsProcessed,
                            TotalJobItems, CreatedBy.Email
                            FROM AsyncApexJob
                            WHERE Id = :bc.getJobId()];
    }
}