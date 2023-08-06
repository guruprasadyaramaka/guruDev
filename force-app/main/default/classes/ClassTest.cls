@isTest
public class ClassTest {
    @isTest static void addTest(){
     
        system.assertequals(90,ClassA.add(20,70));
    }
    @istest static void subTest(){
        ClassA c=new ClassA();
        system.assertequals(5,c.sub(10,5));
        system.assertEquals(5, c.sub(5,10));
    }

}