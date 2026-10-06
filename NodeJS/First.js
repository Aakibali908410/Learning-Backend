console.log("Start : 1")

setTimeout(() => {
    console.log("second 2")
}, 3000);

Promise.resolve().then(()=>{
    console.log("Three 3");
})
process.nextTick(()=>{
    console.log("Four 4")
})

console.log("Five 5");
