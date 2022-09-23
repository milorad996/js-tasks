

let colours = ['red','black','white','green','yellow','blue'];

for(var i = 0; i <= colours.length; i++){
    console.log(colours[i])
}

colours.forEach(function(item) {
    console.log(item)
})

function rotateArray(newArr){
      newArr.unshift(newArr.pop());

      console.log(newArr);
}


rotateArray([2,3,4,5])

let sumOfNumbers = () => {
    let arr1 = [50,60,70];

    var sum = arr1.reduce((previousValue, currentValue) => previousValue + currentValue);

    console.log(sum);
}

sumOfNumbers();

function getArr(number){
    var newArr = [];
    for(i = 0; i <= number; i++){
        newArr.push(i)
    }
    console.log(newArr.reverse())
}


getArr(8);

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(arr){
    for(i = 0; i < arr.length;i++){
        console.log(arr[i][0]+ " " +  "the"  + " " + arr[i][1][0]+ " " + "is"  + " " + arr[i][1][1]);
    
        
    }

  }

  zooInventory(myZoo);