
// First we declare the function swapcase
function swapCase(orgStr){
    
 // we decaler another string for storing our swaped case string
    let swappedStr = ''

// we use a for loop to itterate through the string
    for(let i =0 ;i<orgStr.length;i++){

// here we use charAT string method to itterate throuch each character of the stirng and swaping the case
        let char = orgStr.charAt(i)
// char is a variable  which reps the orgStr


        if (char === char.toUpperCase()) {

            swappedStr += char.toLowerCase()
            
        } else {
            swappedStr += char.toUpperCase()
        }
    }
    
     console.log(swappedStr)

}
// function call
swapCase('The Quick Brow Fox')
 
