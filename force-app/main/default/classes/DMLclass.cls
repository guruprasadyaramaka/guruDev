public class DMLclass {
   // in this merhod pass the values manually 
    public static void account1(){
        list <account> l=new list <account>();
        for(integer i=1;i<=10;i++)
        l.add(new account(name='Hi'+i));
        insert l;
    }
}