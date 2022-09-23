


var name = "Milorad";

function testScope() {

    var name2 = "Milorad";

    for(var i = 0; i < 5 ; i++ ){
    }
    console.log(i)

    //with let => i is not defined
    //with var => output is 5

    console.log(name) //output is "Milorad"
}

console.log(name2); //name2 is not defined

testScope();