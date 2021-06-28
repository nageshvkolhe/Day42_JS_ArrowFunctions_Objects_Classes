class EmployeePayrollData {
    //property 

    id;
    salary;
    gender;
    startDate;

    //Constructor

                        // constructor(id, name, salary) {
                        //     this.id = id;
                        //     this.name = name;
                        //     this.salary = salary;
                        // }

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and Setter method
    get name() {return this._name;}
    set name (name){
        let nameRegx = RegExp('^[A-Z]{1}[a-z]{2,}$'); ////----->Regex
        if (nameRegx.test(name)) //----> Exception Handling (Try Block)
            this._name = name;
        else throw 'Name is Incorrect';////------>Catch block
    }

    //method
    toString() {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ",gender=" + this.gender + ",startDate=" + this.startDate; 
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Nagesh", 3000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
try{
    employeePayrollData.name = "ahesh";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}



let newEmployeePayrollData = new EmployeePayrollData(3,"Sumedh", 3000, "M", new Date());
console.log(newEmployeePayrollData.toString());
