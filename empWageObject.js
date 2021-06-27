//UC - 1
{
    const IS_ABSENT = 0;

    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT){
         console.log("UC-1 Employee is ABSENT");
    } else {
        console.log("UC-1 Employee is PRESENT");
    }
}

//UC - 2

    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
{
    let empHrs = 0;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }   

    let empWage = empHrs * WAGE_PER_HOUR;
 
    console.log("UC-2 Emp Wage: " +empWage);
}

//UC - 3
{
    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
              return PART_TIME_HOURS;       
            case IS_FULL_TIME:
              return FULL_TIME_HOURS;
            default:
              return 0;
        }
    }
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC-3 Emp Wage: " + empWage);

}

//UC - 4
{
    const NUM_OF_WORKING_DAYS = 10;
    let empHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3; 
        empHrs += getWorkingHours(empCheck); 
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC-4 Total Hrs: " + empHrs + " Emp Wage: " + empWage);
}

//UC - 5
{
    const MAX_HRS_IN_MONTH = 100;
    const NUM_OF_WORKING_DAYS = 10;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck); 
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC-5 Total Days: " +totalWorkingDays+ " Total Hrs: " +totalEmpHrs+ " Emp Wage: " +empWage);
}

//UC - 10 Object Generation

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

    const MAX_HRS_IN_MONTH = 100;
    const NUM_OF_WORKING_DAYS = 10;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
            {
              dayNum: totalWorkingDays,
              dailyHours: empHrs,
              dailyWage: calcDailyWage(empHrs),
                toString() {
                    return '\nDay' +this.dayNum + '=> Working Hours is ' + this.dailyHours +'And Wage Earned = ' +this.dailyWage
                },             
            });
    }
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC-10 Showing Daily Hours worked and Wage Earned: " +empDailyHrsAndWageArr);


//UC-11

let totalWages = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0 );

let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC-11A Total Hours: " +totalHours+ " Total Wages: " +totalWages);


process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
       
                     
let partWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDayStrings: " +partWorkingDayStrArr);


let nonWorkingDays = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                     .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
 console.log("\nUC 11D NonWorkingDayNums: " +nonWorkingDays);  
