public class ListClass {
    public static integer maxValue(List<Integer> numList){
        integer highValue=numList[0];
        for(integer i=0;i<numList.size();i++){
            if(numList[i]>highValue){
                highValue=numList[i];
            }
        }
        system.debug('highValue===>'+highValue);
        return highValue;
    }
    public static void accMethod(){
        try{
            Account acc=null;
            acc.Name=null;
            //insert acc;
        }catch(Exception ex){
            logger.log(ex.getStackTraceString(),'This was an expected exception','Exception');
        }
    }
}