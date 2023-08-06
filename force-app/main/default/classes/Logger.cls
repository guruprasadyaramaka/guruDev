public with sharing class Logger {
	private Static List<Log__c> currentLogs;
    public static void Log(String stackTrace,String logMessage,String logType){
        Log__c log=New Log__c();
        log.StackTrace__c = stackTrace;
        log.LogMessage__c = logMessage;
        log.Type__c = logType;
        insert log;
    }
}