/*Write the functions necessary for the tests to pass, you can find the tests in the downloaded code.

forEach
doubleValues
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed
 to the function doubled

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]*/

function doubleValues(arr){
    let newArray = []
    arr.forEach(function(val){
    newArray.push(val * 2)

    })

    return newArray
}

/*onlyEvenValues
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]*/

function onlyEvenValues(arr){
   return arr.filter(function(val){
        return val % 2 === 0;
    })
}

/*showFirstAndLast
Write a function called showFirstAndLast which accepts an array of strings and returns a new array 
with only the first and last character of each string.

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']*/

/*function showFirstAndLast(arr){

//return arr.map(function(val){
    let charSet = Array.from(val);
    return charSet.filter(function(val, idx){
        return idx === 0
        return idx === charSet.length -1
        
    } 
})
} this function using map and filter only works with the first or the last element, as it is being returned it is not possible to return the first and then the last for now. 
I will try to write it manually. 
*/

let inputArray = ['colt','matt', 'tim', 'test']

function showFirstAndLast(arr){
    let newArray = [];
    for(word in arr){
        
        let charSet = Array.from(arr[word]);
        
        newArray.push(`${charSet[0]}${charSet[charSet.length -1]}`)
    }
    return newArray
}

/*addKeyAndValue
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and 
returns the array passed to the function with the new key and value added for each object


  ]*/

let objArray = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ]

function addKeyAndValue(arr,key,value){

   for(let i = 0; i < arr.length; i++){
    arr[i][key] = value;
   }

   return arr

}

/*vowelCount
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.
This function should be case insensitive so a lowercase letter and uppercase letter should count

*/

function vowelCount(string){
    let vowelCountingObject = {}
    let caseInsensitive = string.toLowerCase()
    let unique = new Set(caseInsensitive)
    let iterable = Array.from(unique)
    let isVowel = iterable.filter(function(val){
        return "aeiou".indexOf(val) !== -1
    }) 
    for(let i = 0; i < isVowel.length; i++){
        vowelCountingObject[isVowel[i]] = 1;
    }
    for(let i = 0; i < isVowel.length;i++){
        let counter = 0;
        for(let y = 0; y < string.length; y++){
            if (string[y] === isVowel[i]){
                counter++
            }
        }
        if (counter > 1) {vowelCountingObject[isVowel[i]] = counter;
    } else {vowelCountingObject[isVowel[i]] = 1}

}
return vowelCountingObject
}

/*doubleValuesWithMap
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

*/
function doubleValuesWithMap(arr){
   return arr.map(function(val){

        return val * 2
    })
}

/*valTimesIndex
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/

function valTimesIndex(arr){

   return  arr.map(function(val,idx,arr){
        return val * idx
    })

}

/*extractKey
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/
let objectArray2 = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}]

function extractKey(arr,key){

  return  arr.map(function(val){
        return val[key]

    })
}

/*extractFullName
Write a function called extractFullName which accepts an array of objects and returns 
a new array with the value of the key with a name of “first
 and the value of a key with the name of “last” in each object,
 concatenated together with a space.

*/
let objectArray3 = [
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
]

function extractFullName(arr,name){

    return  arr.map(function(val){
          return `${val['first']} ${val['last']}`
  
      })
  }

/*filter
filterByValue
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

*/

let catOwners =[
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
]

function filterByValue(arr){
   return arr.filter(function(val){
   return val.isCatOwner 
    
    })
}

/*find
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/

function find(arr,num){
   return arr.filter(function(val){
       return val === num

    })[0]
}

/*findInObj
Write a function called findInObj which accepts an array of objects, a key, and some value 
to search for and returns the first found value in the array.
*/

function findInObj(arr,key,search){
    return arr.filter(function(val){
       return search === val[key]
    })[0]
}

/*
removeVowels
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

*/

function removeVowels(string){
let lowered = string.toLowerCase();
let strArray = Array.from(lowered);

let noVowelArray = strArray.filter(function(val){
return "aeiou".indexOf(val) === -1;
//this is returning any letter that is not found to be a vowel
})
return noVowelArray.join('')
}

/*doubleOddNumbers
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
*/

function doubleOddNumbers(arr){

let odd = arr.filter(function(val){
    return val % 2 == 1
})

return odd.map(function(val){
    return val *= 2;
})

}