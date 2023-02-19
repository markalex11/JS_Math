
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