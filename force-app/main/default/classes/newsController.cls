public with sharing class newsController{
    @AuraEnabled
    public static Map<String,Object> retriveNews(){
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a4330cdde5545cb89e740d741b393eb');
         httpRequest.setMethod('GET');
         
         Map<String,Object> newsJsonData = New Map<String,Object>();
          String strResponse = null;
          try{
                Http http = new Http();
                HttpResponse httpResponse = http.send(httpRequest);
                if(httpResponse.getStatusCode() == 200){
                strResponse = httpResponse.getBody();
                } else {
                     throw new CalloutException(httpResponse.getBody());
                }
          }catch(Exception ex){
            throw ex;
          }
          if(!String.isBlank(strResponse)){
             newsJsonData=(Map<String,Object>)JSON.deserializeUntyped(strResponse); 
          }
          if(!newsJsonData.isEmpty()){
              return newsJsonData;
          }else {
              return null;
          }
    }
}