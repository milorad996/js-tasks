

let promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        resolve("Success!");
    },2000)

    reject("Error!");
})


async function test(){
    
    let x  = await promise;
    console.log(x);
}

test();