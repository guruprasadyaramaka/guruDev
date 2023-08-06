public class StaticMethodDemo {
     static integer x=10;
     static integer y=20;
    
    
    public  static integer add( integer a, integer b){
           integer c=a+b;
        system.debug(c);
        //integer z=x+y;
        //system.debug(z);
          return c;
     }
    public  integer sub(integer a,integer b){
        integer z=a-b;
        system.debug(z);
        add(22,66);
        //system.debug(w);
        if(a>b){
            system.debug(a);
             return (a-b);
        }
        else{
            system.debug(b);
           return (b-a);
        }
    }
}