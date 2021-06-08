var p1 = new Promise((resolve, rejects) => {
    if(1 == 1){
        setTimeout(() => {
            resolve("p1 resolve")
        }, 3000);
    } else {
        rejects("p1 reject");
    }
})

var p2 = new Promise((resolve, rejects) => {
    if(2 == 2){
        setTimeout(() => {
            resolve("p2 resolve")
        }, 2000);
    } else {
        rejects("p2 reject");
    }

})

var p3 = new Promise((resolve, rejects) => {
    if(3 == 3){
        setTimeout(() => {
            resolve("p3 resolve")
        }, 5000);
    } else {
        rejects("p3 reject");
    }
})

Promise.all([p1, p2, p3])
.then( messages => {
    console.log(messages);
})
.catch( err => {
    console.log(err);
})
Promise {<pending>}
VM1887:34 (3) ["p1 resolve", "p2 resolve", "p3 resolve"]
