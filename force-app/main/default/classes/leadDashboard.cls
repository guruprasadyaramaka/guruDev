public class leadDashboard {
	public static Date getQuarterStartDate(Integer month){
        Date startDate = system.today();
        Set<String> firstQuarter = new Set<String>{'01','1','02','2','03','3'};
        Set<String> secondQuarter = new Set<String>{'04','4','05','5','06','6'};
        Set<String> thirdQuarter = new Set<String>{'07','7','08','8','09','9'};
        
        String quarter = String.valueOf(month);
        if(firstQuarter.contains(quarter)){
            system.debug('==firstQuarter==');
            startDate = date.newinstance(date.today().year(),01,01);
        }else if(secondQuarter.contains(quarter)){
            system.debug('==SecondQuarter==');
            startDate = date.newinstance(date.today().year(),04,01);
        }else if (thirdQuarter.contains(quarter)){
             system.debug('==ThirdQuarter==');
            startDate = date.newinstance(date.today().year(),07,01);
        }else {
            system.debug('==fourthQuarter==');
            startDate = date.newinstance(date.today().year(),10,01);
        }
        system.debug('startDate....'+startDate);
       return startDate;
    }
    public static Date getQuarterStartDate1(Integer month) {
    Map<Integer, Date> quarterStartDates = new Map<Integer, Date> {
        1 => date.newInstance(date.today().year(), 1, 1),
        2 => date.newInstance(date.today().year(), 1, 1),
        3 => date.newInstance(date.today().year(), 1, 1),
        4 => date.newInstance(date.today().year(), 4, 1),
        5 => date.newInstance(date.today().year(), 4, 1),
        6 => date.newInstance(date.today().year(), 4, 1),
        7 => date.newInstance(date.today().year(), 7, 1),
        8 => date.newInstance(date.today().year(), 7, 1),
        9 => date.newInstance(date.today().year(), 7, 1),
        10 => date.newInstance(date.today().year(), 10, 1),
        11 => date.newInstance(date.today().year(), 10, 1),
        12 => date.newInstance(date.today().year(), 10, 1)
    };
    system.debug(quarterStartDates.get(month));    
    return quarterStartDates.get(month);
}
}