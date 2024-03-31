//decaler funtion to get array of prime numbers 
function filterPrimes(arr){
    // we declare  a helper function to determine whether a number is prime or not
function isPrime(num){

    if ( num<2){

        return false
    }
    for (let i= 2; i <= Math.sqrt(num); i++) {
        
        if(num % i === 0){

            return false
        }
        
    }
    return true
}

// we create a new array where the prime numbers are going to be stored
// we use the .filter method so as to get a new array containing the prime numbers
let kits = [arr.filter(isPrime)]

console.log(kits)
}

filterPrimes([1,2,3,4,5,6,7,8,9,10])

 