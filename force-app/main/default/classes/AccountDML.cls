//class for Declearing DML insert Function
//=========================================

public class AccountDML {
// method for insert one record
// =============================
    public static void  DMLmethod(){
        account a=new account();
        a.name='DML Method';
        a.AccountNumber='Demo Method';
        a.AnnualRevenue=34000;
        insert a;
    }
//Method for insert multiple records using list
//==============================================
/*why we are using list means for every record it will allow one DML operation*/
    public static void DMLMethod1(){
       list<account> l=new list<account>();
             l.add(new account(name='DML Method1',AccountNumber='DEmo Method1',AnnualRevenue=100000));
             l.add(new account(name='DML me',accountnumber='DEmo method2',AnnualRevenue=200000));
             l.add(new account(name='DML metho',AccountNumber='Demo method3',AnnualRevenue=300000));
        insert l;
    }
//Method for insert multiple records using list
//==============================================
   public static void DMLMethod2(){
       list<account> l=new list<account>();
         for(integer i=1;i<=10;i++)
             l.add(new account(name='Test'+i,accountnumber='test account '));
        insert l;
 }
//Method for insert in single line
//================================
    public static void DMLMethod3(){
       insert new account(name='Public',accountnumber='public account');
       insert new account(name='private',accountnumber='private account');
        
        }
}