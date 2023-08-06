public class apexMapController {
    @AuraEnabled
    public static map<string,string> fetchSimpleMap(){
        try{
            Map<String,String> simpleMap = new Map<String,String>();
            simpleMap.put('fruit','apple');
            simpleMap.put('vegetable','potato');
            return simpleMap;
            
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
    
    @AuraEnabled
    public static List<map<string,string>> fetchListMap(){
        try{
            List<map<string,string>> lstofMap=New List<map<string,string>>();
            map<string,string> simplemap1=New Map<String,String>();
            simplemap1.put('fruit','apple');
            simpleMap1.put('vegetable','potato');
            lstofMap.add(simpleMap1);
            map<string,string> simplemap2=New Map<String,String>();
            simplemap2.put('fruit','mango');
            simplemap2.put('vegetable','Cabbage');
            lstofMap.add(simpleMap2);
            
            return lstofMap;
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
    
    @AuraEnabled
    public static map<string,map<string,string>> fetchNestedMap(){
        try{
            Map<String,Map<String,String>> nestedMap = new Map<String,Map<String,String>>();
            Map<String,String> simpleMap1 = new Map<String,String>();
            simpleMap1.put('fruit','apple');
            simpleMap1.put('vegetable','potato');
            nestedMap.put('map1',simpleMap1);
            return nestedMap;
        }catch(Exception ex){
            throw new AuraHandledException(ex.getMessage());
        }
    }
}