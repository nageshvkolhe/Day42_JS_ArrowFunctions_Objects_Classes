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

//UC - 6

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

    const MAX_HRS_IN_MONTH = 100;
    const NUM_OF_WORKING_DAYS = 10;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC-6 Total Days: " +totalWorkingDays+ " Total Hrs: " +totalEmpHrs+ " Emp Wage: " +empWage);

//Array helper Functions
//UC - 7A
 
 let totEmpWage = 0;
 function sum(dailyWage) {
     totEmpWage += dailyWage;
 }
 empDailyWageArr.forEach(sum);
 console.log("UC7A - Total Days: " +totalWorkingDays + "Total Hrs: " +totalEmpHrs + "Emp Wage: " +totEmpWage);

  function totalWage(totalWage, dailyWage) {
     return totalWage + dailyWage;
  }
  //console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC - 7B

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC - 7C

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(mapDayWithWageArr);

//UC - 7D

function findfulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First Time Fulltime Wage was Earned on Day: " +mapDayWithWageArr.find(findfulltimeWage));

//UC - 7E

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check all element have full time wage: " +fullDayWageArr.every(isAllFulltimeWage));

//UC - 7F

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7F - Check if any Part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));


//UC - 7G

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) 
        return numOfDays+1;
        return numOfDays;
}
console.log("UC7G - Number of Days Emp Worked: " +empDailyWageArr.reduce(totalDaysWorked, 0));


//UC - 8 Map function
    console.log("UC8 Emp Wage Map totalHrs: " +Array.from(empDailyWageMap.values()).reduce(totalWage, 0));


//UC - 9 -----> Arrow Functions

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}


let totalHours = Array.from(empDailyHrsMap.values())
                      .filter(dailyHours => dailyHours > 0)
                      .reduce(findTotal, 0);

let totalSalary = empDailyWageArr
                  .filter(dailyWage => dailyWage > 0)
                  .reduce(findTotal, 0);

console.log("UC9A Emp Wage with Arrow :" + "Total Hours: " + totalHours +"Total Wages: " +totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " +fullWorkingDays);
console.log("Part Working Days: " +partWorkingDays);
console.log("Non Working Days: " +nonWorkingDays);



