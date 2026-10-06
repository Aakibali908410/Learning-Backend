const TripPlanWithFriends=new Promise((resolve,reject)=>{
    let DadPermisssion=true;

    setTimeout(() => {
        if(DadPermisssion){
            resolve("YAAA ! , chalo trip pe")
        }
        else{
            reject("Sorry!, I cant come with you")
        }
    }, 2000);
})

TripPlanWithFriends.then((message)=>{
    console.log(`Message from dad for a trip: ${message}`);
    console.log('YAAAHHHH, chaloooo trip ke liye')
}).catch((message)=>{
    console.log(`Message from dad : ${message}`);
    console.log(`Bhai, me nahi jauga papa ne mna kr diya hai`)
})


// ******************************************************************************
// handling promises using async await
async function handlePapaPromise(){
    const message = await DadPermisssion;
    console.log(message);
}