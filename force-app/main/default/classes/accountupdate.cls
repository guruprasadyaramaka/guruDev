public class accountupdate {
  
    public pagereference x1(){
        list<account> acc =new list<account>();
        acc=[Select name,id From account];
        for(account a:acc){
            
          a.name ='vinod';
          acc.add(a);
            
        }
        update acc;
        return null;
    }
    

}