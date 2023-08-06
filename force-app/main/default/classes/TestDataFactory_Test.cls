//@isTest
public class TestDataFactory_Test {

    //@isTest
    public static void testAccountCreation(){
        Account acc=(Account)TestDataFactory.generateRecord(new Account());
        insert as user acc;
        User usr=(User)TestDataFactory.generateRecord(new User());
        insert as user usr;
        system.debug('acc===>'+acc);
        system.debug('usr===>'+usr.id);
    }
}