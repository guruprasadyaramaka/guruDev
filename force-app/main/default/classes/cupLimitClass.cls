public class cupLimitClass {	
    Public static void testSOQLloop(){
        integer start = Limits.getCpuTime();
        for(Account acc:[select id,Name from Account]){
            system.debug('acc.Name--->'+acc.Name);
        }
        integer stop=limits.getCpuTime();
        integer total= stop-start;
        system.debug('CPU@testSOQLloop===>'+total);
    }
    Public static void testSOQLBatchedForloop(){
        integer start = Limits.getCpuTime();
        for(List<Account> accs:[select id,Name from Account]){
            for(Account acc:accs){
                system.debug('acc.Name--->'+acc.Name);
            }            
        }
        integer stop=limits.getCpuTime();
        integer total= stop-start;
        system.debug('CPU@testSOQLBatchedForloop===>'+total);
    }
    Public static void testIteratorOrExternalMax(){
        integer start = Limits.getCpuTime();
        List<Account> accList=[select id,Name from Account];
        integer max=accList.size();
        for(integer i=0;i<max;i++){
            system.debug('acc.Name--->'+accList[i].Name);
        }
        integer stop=limits.getCpuTime();
        integer total= stop-start;
        system.debug('CPU@testIteratorOrExternalMax===>'+total);
    }
    Public static void testIteratorInlineMax(){
        integer start = Limits.getCpuTime();
        List<Account> accList=[select id,Name from Account];
        for(integer i=0;i<accList.size();i++){
            system.debug('acc.Name--->'+accList[i].Name);
        }
        integer stop=limits.getCpuTime();
        integer total= stop-start;
        system.debug('CPU@testIteratorInlineMax===>'+total);
    }
    public static void mapResult(){
        Map<Id,Account> accMap=New Map<Id,Account>([select id,Name from Account]);
        List<Account> accList=[select id,Name from Account];
Map<String,Decimal> map1= new Map<String,Decimal>{'key1' => 1.23,'Key2' => 2.56};
Map<String,Decimal> map2= new Map<String,Decimal>{'key4' => 3.23,'Key5' => 4.56};
Map<String,Decimal> map3= new Map<String,Decimal>{'key6' => 5.23,'Key7' => 6.56};
Map<String,Decimal> map4= new Map<String,Decimal>{'key8' => 7.23,'Key9' => 8.56};

Map<String,Decimal> finalMap=New Map<String,Decimal>();
    }
}