public class SoqlReference {
    
    public static void Accupdate(){
     
        list<Account> acclst=[select name,lastmodifiedDate  from account where lastmodifiedDate  >=last_N_days:10];
        for(account a:acclst){
            a.description='Group by example';
        }
        update acclst;
    }

}