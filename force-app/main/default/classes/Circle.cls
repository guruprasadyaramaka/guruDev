public class Circle {
    public static decimal area(integer a,integer b){
        decimal d=0.5;
        decimal e=d*a*b;
        
        return e;
     }
    public static void areas(){
        list <integer> l=new list<integer>();
        for(integer i=1;i<=10;i++){
            l.add(i);
           system.debug(l);
        }
    }
        public static void perimiter(){
            map <integer,integer> s=new map <integer,integer>();
            s.put(1,100);
            s.put(2,100);
            s.put(3,100);
            s.put(4,100);
            system.debug(s);
        }
    
    }