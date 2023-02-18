
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