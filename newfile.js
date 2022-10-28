
function addToZero(array) {
   target = 0
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true;
        }
      }
    }
}

nums = [1, 2, 3, -2]

if (addToZero(nums) === true){
    console.log("true")
}
else{
    console.log("false")
}

//43.22 μs//
 
//-----------------------------------------------------------------------------------------



function hasUniqueChars(str)
{  
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    return true;
}
 
console.log(hasUniqueChars("kkarston"));
//40.46 μs//

//-----------------------------------------------------------------------------------------   

 function isPangram(string){
    let input = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(input.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }


console.log(isPangram("I like cats, but not mice"))
//43.033 μs//

//-----------------------------------------------------------------------------------------


function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(findLongestWord("hi , hello"));

  //51.043 μs//

//-----------------------------------------------------------------------------------------

