//Step 2
let employees = [
    {name: "Matthew", hourlyRate: 20, hoursWorked: 40},
    {name: "Ashley", hourlyRate: 15, hoursWorked: 42},
    {name: "Martin", hourlyRate: 23, hoursWorked: 44},
    {name: "Gina", hourlyRate: 25, hoursWorked: 38}
];

employees.forEach(employee => console.log(`Employee Name: ${employee.name}, Hourly Rate: ${employee.hourlyRate}, Hours Worked: ${employee.hoursWorked}`));

//Step 3
function calculateBasePay(hourlyRate, hoursWorked) {
let regularHours;
if (hoursWorked > 40) {
    regularHours = 40;

} else {
    regularHours = hoursWorked;
}
return regularHours * hourlyRate; 
}
console.log(`Employee Name: ${employee.name}, Base.Pay: $${calculateBasePay(employee.hourlyRate, employee.hoursWorked)}`)

//Step 4
function calculateOvertimePay(hourlyRate, hoursWorked) {
let overtimeHours;
if (hoursWorked > 40) {
    overtimeHours = hoursWorked - 40;
} else {
    overtimeHours = 0
}
return overtimeHours * hourlyRate * 1.5;
}
//Step 5
function calculateTaxes(grossPay) {
return grossPay * 0.15;
}
//Step 6
function processPayroll(employee) {
    let basePay= calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay= calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay= caculateGrossPay(basePay, overtimePay);
    let netPay= calculateNetPay(grossPay, taxes);
return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay:grossPay,
    netPay: netPay
}
}
//Step 7
employees.forEach(employee =>{
    let processPayroll= processPayroll (employee)
    console.log(processPayroll)
}
);