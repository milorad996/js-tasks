
let person = {
    firstName: "Milorad",
    lastName: "Savkovic",
    age: 25,
}

let person2 = '{"firstName":"John", "lastname" : "Clarkson", "age": 30}'

console.log(JSON.parse(person2))
console.log(JSON.stringify(person))