public class listPractice {
    //accessModifies returnType methodName(){}
    public boolean checkname(String name,List<String> names1){
        boolean nameAvailable;
        List<String> names=New List<String>{'Guru','Prasanth','Naveen','Divakar','Test'};
        if(names.contains(name)){
            nameAvailable=true;
             //return nameAvailable;
        }else{
            nameAvailable=false;
             //return nameAvailable;
        }
        system.debug('nameAvailable===>'+nameAvailable);
       return nameAvailable;
    }
    public void addValues(){
        integer number1=10;
        integer number2=20;
        integer number3=number1+number2;
    }
}