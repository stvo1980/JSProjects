function palindrome(str) {
    str = str.toLowerCase()
    let regex = / |\W|_/ig
    let arr = str.replace(regex, "").split("")
    let reversed = [...arr].reverse()
    let res = true
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] != reversed[i]) {
        res = false
       } 
      } 
    return res
    }
   
   palindrome("almostomla");