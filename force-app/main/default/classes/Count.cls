public class Count {
    integer i,sn,en,m1,m2,m3,total,avg;
    string name='Guru';
    public Count(integer sn,integer en){
        this.sn=sn;
        this.en=en;
    }
    public void counting(){
        
        for(i=sn;i<=en;i++){
            system.debug(i);
        }
       
        }
             public void name(){
              for (i=1;i<=10;i++){
                system.debug(name+i);
            }
    }
   public Count(integer m1,integer m2,integer m3){
        this.m1=m1;
        this.m2=m2;
        this.m3=m3;
       
        
   }
    public void total(){
        total=m1+m2+m3;
        system.debug(total);
    }
    public void avg(){
        avg=(m1+m2+m3)/3;
        system.debug(avg);
    }
}