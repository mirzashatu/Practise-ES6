function add(num1,num2){
    return num1+num2;

}
const total =add(15,17)
console.log(total)


// if num2 =no value
const  value=add(15);
console.log(value)
// ans=NAN solve=1   || means or
function add(num1,num2){
    num2=num2 || 0;

    return num1+num2;


}
console.log(value)
// solve=2
function add(num1,num2=20){
    return num1+num2;


}
console.log(value)