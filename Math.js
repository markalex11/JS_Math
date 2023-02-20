
//сумма всех чисел от нуля до н
function f(n){
  if(typeof n != 'number' || !Number.isInteger(n) || n<1 ){
    return false
  }
 return (n*(n+1))/2
};

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

//на сколько времени хватит дейзика
function evaporator(content, evap_per_day, threshold){ 
  let result = 0;
  let percentage = 100;
  while(percentage > threshold){
    percentage -= percentage * (evap_per_day / 100);
    result += 1
  }
  return result
}


//самый близки делитель на 5
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}



function removeSmallest(numbers) {
  const myCopy = numbers.slice(0);
  let min = numbers.indexOf(Math.min(...numbers)); 
  myCopy.splice(min,1);
  return myCopy;
}


function tribonacci(signature,n){
  if(n === 0){
    return []
  } else {
    for(let i = 3; i < n; i++){
      signature.push(signature[i-3]+signature[i-2]+signature[i-1])
    }
    return signature.slice(0,n)
  }
}

//задача с мячом у окна
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}

function isPrime(num) {
  if (num < 2){ 
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i == 0){  
     return false;
     }
  } 
  
return true

}

function isLeapYear(year) { 
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}



var findDigit = function(num, nth){
  if(Math.abs(num).toString().length<nth){
    return 0
  }else if(nth <= 0){
    return -1
  }
    return Number(Math.abs(num).toString().split('').reverse()[nth-1])
}


function sqInRect(lng, wdth){
  const  result = [];
  if(lng == wdth) {
    return null
  }
  while(lng > 0 && wdth > 0){
    result.push(lng > wdth ? wdth : lng);
    lng > wdth ? lng -= wdth : wdth -= lng;
  }
  return result
}

function sumEvenNumbers(input) {
  return input.reduce((acc,el)=> el%2==0?acc+=el:acc,0)
}

//сумма всех нечетных чисел
function cubeOdd(arr) {
  if(arr.some(el=> typeof el != 'number')){
    return undefined
  }
  return arr.filter(el=> el%2==1||el%2==-1)
            .map(el=>Math.pow(el,3))
            .reduce((acc,el)=>acc+el,0)
}



var findDigit = function(num, nth){
  if(Math.abs(num).toString().length<nth){
    return 0
  }else if(nth <= 0){
    return -1
  }
    return Number(Math.abs(num).toString().split('').reverse()[nth-1])
}

function digitalRoot(n) {
  if(n < 10){
    return n
  }else{
    return digitalRoot([...(n+'')].reduce((acc,el)=> acc+Number(el),0))
  }
  
}


//задача с количеством яиц и верменим на их варку
function cookingTime(eggs) {
  let count = 0
  while(eggs>0){
    eggs -= 8;
    count += 5
  }
  return count
}


function halvingSum(n) {
  if(n < 1){
    return 0
  }else{
    return n + halvingSum(Math.floor(n/2))
  }
}

//задача с навигатором и средней скоростью 
function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  
  const delta = [];
  for (let i = 0; i < x.length-1; i++) { 
    delta.push((x[i+1]-x[i])*3600/s);
  }
  
  return Math.max(...delta);
}

function solve(arr){  
  return arr.map(el => [...el.toLowerCase()] 
            .reduce((acc,v,i)=> 
                   (v.charCodeAt()-96 == i+1)?
                    acc + 1: acc                                               
                   ,0))
 }

 function evenNumbers(array, number) {
  return array.filter(el=>el%2==0).slice(-number)
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt([...arguments].map(el=>el*el).reduce((acc,el)=>acc + el))/2)
}


function largestPairSum (numbers) {
  numbers = numbers.sort((a,b)=> b-a);
  return numbers[0]+numbers[1]
}


function factorial(n){
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  
}

function sumOfMinimums(arr) {
  return arr.map(el => el.sort((a,b)=> a-b)).map(el => el[0]).reduce((acc,el)=> acc+el)
}


function maxMultiple(divisor, bound){
  
  for(let i = bound; i > 1; i--){
    if(i%divisor == 0){
      return i
    }
  }
}


function breakChocolate(n,m) {
  if(n < 1||m < 1){
    return 0
  } else 
  return n*m-1;
}


function SeriesSum(n){
  for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
 }


 function divisors(integer) {
  const result = []; 
  for(let i = integer-1; i > 1; i-- ){
    if(integer%i == 0){
      result.unshift(i)
    }
  }
  if(!result.length){
    return integer+' is prime'
  } else {
    return result
  }
  
  }

  function nbYear(p0, percent, aug, p) {
    let year = 0;
    for(year; p0 < p; year++){
      p0 += p0 * percent/100 + aug | 0
    }
    return year
 }

 function getSum(a, b){
  const list = [];
  if(a > b){
  for(let i = b ; i <= a; i++ ){
    list.push(i)
  }
   return list.reduce((acc,el)=>acc+el,0)
    } else if(b > a){
      for(let i = a ; i <= b; i++ ){
    list.push(i)
  }
   return list.reduce((acc,el)=>acc+el,0)
    } else {
      return a
    }

}

function sumDigPow(a, b) {
  
  const first = [];
  const second = [];
  
  for(let i = a; i < b; i++ ){
    first.push(i)
  }
  
  for(let i = 0; i < first.length; i++){
    if((first[i]+'').split('').reduce((acc,el,i)=> acc + Math.pow(Number(el),i+1),0) == first[i]){
      second.push(first[i])
    }
  }
  
  
  return second
}


function factorial(n){
  if(n == 0){
    return 1
  } else if(n < 0 || n > 12){
    throw new RangeError()
  }
  
  else {
    return n * factorial(n-1)
  }
}


function getDivisorsCnt(n){
  const myList = [];
    for(let i = 1; i <= n; i++){
      if(Number.isInteger(n/i)){
         myList.push(i);
         }
    }
  return myList.length
}


function checkExam(array1, array2) {
  let res = 0;
  for(let i = 0; i < array1.length; i++){
    if(array2[i]== ''){
      continue
    }else if(array1[i] == array2[i]){
      res += 4;
    }else {
      res -=1
    }
  }
  if(res < 0){
    return 0;
  }else{
    return res
  }
}


function unusualFive() {
  const five = 'abcde';
 return  five.length
 
}


function findDifference(a, b) {
  let result = a.reduce((acc,el)=>acc*el)-b.reduce((acc,el)=>acc*el);
  if(result < 0){
    return result * -1
  } else {
    return result
  }
}

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

function productFib(prod){
  const myList = [0,1,1];
  let i = 0;
  while(myList[i+1]*myList[i+2] < prod){
    myList.push(myList[i+1]+myList[i+2])
    i++;
  }
  let myProd = myList.slice(-2).reduce((acc,el)=>acc*el);
  const result = myList.slice(-2);
  if(myProd == prod){
    result.push(true)
  }else{
    result.push(false)
  }
  return result
}

function findMultiples(integer, limit) {
  const result = [];
  let add = integer;
  while(add <= limit){
    result.push(add);
    add += integer;
  }
  return result
}

function arithmetic(a, b, operator){
  const op = {
    'add': a+b,
    'subtract': a-b,
    'multiply': a*b,
    'divide': a/b
  }
  return op[operator]
}

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


function bmi(weight, height) {
  const myBmi = weight/(height*height);
  if(myBmi <= 18.5){
  return "Underweight";
    }else if(myBmi<=25.0){
      return "Normal";
    }else if(myBmi<=30.0){
      return  "Overweight";
    }else{
      return "Obese"
    }
  
}

function sumArray(array) {
  if(!array || array.length<3){
    return 0
  }else {
    array.sort((a,b)=> a-b);
    array.pop();
    array.shift();
    return array.reduce((acc,v)=>acc+v)
  }
}

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for(let i = begin; i <= end; i+=step){
    sum += i
  }
  return sum
};

function index(array, n){
  if(array.length <= n){
    return -1
  }else{
    return Math.pow(array[n],n)
  }
}

var humanYearsCatYearsDogYears = function(humanYears) {
  const one = [1,15,15];
  const two = [2,24,24];
  if(humanYears == 1){
    return one;
  }else if(humanYears == 2){
    return two;
  }else if(humanYears == 0){
    return [0,0,0];
  }else{
    return [humanYears,((humanYears-2)*4)+24,((humanYears-2)*5)+24]
  }
  
  
}

function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1);
  }else {
    return -1
  }
  
}

function zero(f) {return f ? f(0) : 0;}
function one(f) {return f ? f(1) : 1;}
function two(f) {return f ? f(2) : 2;}
function three(f) {return f ? f(3) : 3;}
function four(f) {return f ? f(4) : 4;}
function five(f) {return f ? f(5) : 5;}
function six(f) {return f ? f(6) : 6;}
function seven(f) {return f ? f(7) : 7;}
function eight(f) {return f ? f(8) : 8;}
function nine(f) {return f ? f(9) : 9;}

function plus(b) {return function(a) { return a + b; };}
function minus(b) {return function(a) {return a - b; };}
function times(b) {return function(a) {return a * b; };}
function dividedBy(b) {return function(a) { return Math.floor(a / b); };}

function litres(time) {
  return Math.floor(time/2);
}


function expandedForm(num) {
  num = (num+'').split('');
  let count = num.length-1;
  while(count > 0){
    for(let i = 0; i < num.length; i++){
      if(num[i] !== '0'){
      num[i] = num[i] + '0'.repeat(count);
        }
      count--;
      
    }
  }
  return num.filter(elem => elem !== '0').join(" + ");
}

unction findOdd(A) {
  function count(val) {
    return A.filter(function(a){return a==val;}).length;
  }
  for(let i = 0; i < A.length; i++){
    if(count(A[i])%2 !== 0){
      return A[i];
    }
  }
}

function tribonacci(signature,n){
  if(n === 0){
    return []
  } else {
    for(let i = 3; i < n; i++){
      signature.push(signature[i-3]+signature[i-2]+signature[i-1])
    }
    return signature.slice(0,n)
  }
}


var number = function(busStops){
  let add = 0;
  let exit = 0;
  for(let i = 0; i < busStops.length; i++){
    add += busStops[i][0];
    exit += busStops[i][1];
  }
  return add - exit
}

function oddOrEven(array) {
  if(array == []||array == [0]){
    return "even";
  }
  else if(array.reduce((a,b)=>a+b,0)%2 !== 0) {
  return "odd";
} else {
  return "even";
}
}

function squareDigits(num){
  let mnum = num + "";
  mnum = mnum.split("");
  for(let i = 0; i < mnum.length; i++){
    mnum[i] = +mnum[i];
    mnum[i] = Math.pow(mnum[i], 2) + "";
  }
  mnum = mnum.join("");
  
  return Number(mnum);
}

function sum (numbers) {
  if(numbers == []){
    return 0;
  } else {
    return numbers.reduce((a, b) => a + b, 0);
  }
  
  
};

function simpleMultiplication(number) {
  if(number%2 === 0){
    return number*8;
  } else {
    return number*9;
  }
}

function squareSum(numbers){
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    numbers[i] = Math.pow(numbers[i],2);
    result += numbers[i];
  };
  
  return result;
}

function past(h, m, s){
  let i = 0;
  if (0 <= h <= 23) {
    h = h * 3600000;
  } else return;
  if (0 <= m <= 59) {
    m = m * 60000;
  } else return;
  if (0 <= s <= 59) {
    s = s * 1000
  } else return ;
  
  return  i + h + m + s ;
  
  //#Happy Coding! ^_^
}
