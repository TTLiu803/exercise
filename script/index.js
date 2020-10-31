//Exercise1

var money  = '$10000/month';
var Location = 'Finland';
var job = 'UV Designer';
var reason ='living';
var future = 'You will be a ' + job + ' in ' + Location + ', making ' +
   money + ' for ' + reason;
console.log(future);

//Exercise2
var birthYear = 1999;
var futureYear  = 2020;
var age  = futureYear - birthYear;
console.log('They are ' + age +'years old');

//Exercise3
var age = 21;
var maxAge = 99;
var numbereachDay = 8;
var totalNeed = (numbereachDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeed + ' lollipop to last you until the ripe old age of ' + maxAge;
console.log(message);

//Exercise4
var radius = 7;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);

//Exercise5
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

//Exercise6
function squareNumber(num) 
    {var squaredNumber = num * num;
    
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;}
squareNumber(3);

//Exercise7
function half(num) 
    {var halfed = num / 2;
    console.log('Half of ' + num + ' is ' +  halfed);
    return halfed;}
half(5);

//Exercise8
function percent(num1, num2) 
    {var percented = (num1/num2) * 100;
    console.log(num1 + ' is ' + percented + '% of ' + num2);
    return percented;}
percent(2, 4);

//Exercise9
function areaofcircle(radius) 
    {var area = Math.PI * squareNumber(radius);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;}
areaofcircle(2);

//Exercise10
function runall(num) {
   var halfData   = half(num);
    var squared = squareNumber(halfData);
    var area    = areaofcircle(squared);
   
}
runall(5);