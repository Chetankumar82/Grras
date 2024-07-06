// Write a JS program to input basic salary of an employee and calculate its Gross salary according to following:
//  Basic Salary <= 10000 : HRA = 20%, DA = 80%
//  Basic Salary <= 20000 : HRA = 25%, DA = 90%
//  Basic Salary > 20000 : HRA = 30%, DA = 95%


let basicSalary =10500;

        if(basicSalary<=10000){
            let hra = basicSalary * 0.2;
            let da = basicSalary * 0.8;
            let grossSalary = basicSalary + hra + da;
            console.log(`Gross Salary: ${grossSalary}`);
        }else if(basicSalary<=20000){
            let hra = basicSalary * 0.25;
            let da = basicSalary * 0.9;
            let grossSalary = basicSalary + hra + da;
            console.log(`Gross Salary: ${grossSalary}`);
        }else if(basicSalary>20000){
            let hra = basicSalary * 0.3;
            let da = basicSalary * 0.95;
            let grossSalary = basicSalary + hra + da;
            console.log(`Gross Salary: ${grossSalary}`);
        }else{
            console.log("Invalid Basic Salary");
        }