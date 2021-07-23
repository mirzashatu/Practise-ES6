const  num1=[10,15,25,60];
const num2=[30,40,70,80];
const num3=[100,110,220,230];
const  allAges=num1.concat(num2).concat(num3);
console.log(allAges)
// looks profesonal 
const allAges2=[...num1,...num2,...num3];
console.log(allAges2)
// if i get max number in array
const maxNumber=[550,850,750];
const theValue=Math.max(...maxNumber);
// If you dont use[...] then you got NaN theValue
console.log(theValue)