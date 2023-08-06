public class Student { // syntax for class is accessmodifier CLASS classname
    public decimal n1,n2,n3,total,avg;
    public Student(integer m1,integer m2,integer m3){ //sysntax for constructor is access modifier className
     this.n1=m1;// This function is used to take n1 value from m1(constructor) from abject
     this.n2=m2;
     this.n3=m3;
    }
    public void add(){
        total=(n1+n2+n3);                    //
        system.debug('Total marks = '+total);// syntax for method is accessmodifier RETURNTYPE methodName()
    }
    public void avg(){
        avg=(n1+n2+n3)/3;
        system.debug('Average marks = '+avg);
    }

}