//Step 2
let employees = [
    {name: "Matthew", hourlyRate: 20, hoursWorked: 40},
    {name: "Ashley", hourlyRate: 15, hoursWorked: 42},
    {name: "Martin", hourlyRate: 23, hoursWorked: 44},
    {name: "Gina", hourlyRate: 25, hoursWorked: 38}
];
//Step 3
function calculateBasePay (rate, hours) {
let regularHours;
if (hours > 40) {
    regularHours = 40;
} else {
    regularHours = hours;
}
return regularHours * rate; 
}