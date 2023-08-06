public class FilteredTableController {
	
    @AuraEnabled(Cacheable=true)
    Public Static List<Case> getCases(String caseNumber,String subject,String priority,String status,String accountName,String contactName){
        String query;
        // caseNumber LIKE '% caseNumber %';
        String condition = (String.isNotBlank(caseNumber) ? 'caseNumber LIKE \'' + '%' + caseNumber + '%\'':'');          
        condition +=(String.isNotBlank(subject) ? (String.isNotBlank(condition) ? +' AND ':'')+' subject LIKE \''+'%'+ subject +'%\'':'');
        condition += (String.isNotBlank(priority) ? (String.isNotBlank(condition) ? ' AND ':'') + ' priority LIKE \'' + '%'+ priority +'%\'':'');
        condition += (String.isNotBlank(status) ? (String.isNotBlank(condition) ? ' AND ':'') + ' status LIKE \'' + '%'+ status +'%\'':'');
        condition += (String.isNotBlank(accountName) ? (String.isNotBlank(condition) ? ' AND ':'') + ' Account.Name LIKE \'' + '%'+ accountName +'%\'':'');
        condition += (String.isNotBlank(contactName) ? (String.isNotBlank(condition) ? ' AND ':'') + ' contact.Name LIKE \'' + '%'+ contactName +'%\'':'');
        System.debug('condition===>' + condition);
        if(String.isNotBlank(condition)){
            query = 'SELECT id,caseNumber,Status,Subject,Account.Name,Contact.Name,Priority from Case where '+ condition + 'Order by caseNumber';
        }else{
            query = 'SELECT CaseNumber,Status,Subject,Account.Name,Contact.Name,Priority FROM Case ORDER BY CaseNumber LIMIT 200';
        }
        List<Case> records = Database.query(query);
        return records;
    }
}