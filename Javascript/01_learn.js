console.log("Now,Im learning backend")

const arr=[1,2,3,4,5,6,7];

let sum=(function(arr){
    return arr.reduce((acc,num) => acc+num,0);
})(arr);

console.log(sum);
