const cars = [true, "Volvo", "BMW", 55, null];


console.log(typeof cars);
console.log(cars);

const obj = {"name": "kapil", "age": 55};

console.log(typeof obj);
console.log(obj);

Object.keys(cars);

const student = {
    "name":"Shubham",
    "age": 20,
    "class": 5, 
    "isAlmaBetter":true
}

// 1st way access - dot notation

console.log(student.age);

// 2nd way - bracket notation
console.log(student["age"]);

const student1 = {
    // properties
    name: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    hobbies: ["cricket", "coding"],
    isAlmabetter: true,
    // methods
    sayName: function(){
        console.log("my name is Kapil");
    }
}

// add new props and methods in object

student1.phone = "98758754544";

student1.speaksLanguage = function () {
    return "my mother tounge is Hindi";
};

// To access a property of an object from within a method of the same object, you need to use the this keyword.

const student1 = {
    // properties
    name: 'Kapil',
    age: 20,
    marks: {
        science: 70,
        math: 75
    },
    hobbies: ["cricket", "coding"],
    isAlmabetter: true,
    // methods
    sayName: function(){
        console.log("my name is - ", this.name);
    },
    returnAge: function(){
        console.log("my age is - ", this.age);
    },
    fullName: function(){
        let surname = "Raghuwanshi"
        console.log("my full name is - ", this.name + " " + surname);
    }
}

Object.keys(student1);
// (8) ['name', 'age', 'marks', 'hobbies', 'isAlmabetter', 'sayName', 'returnAge', 'fullName']0: "name"1: "age"2: "marks"3: "hobbies"4: "isAlmabetter"5: "sayName"6: "returnAge"7: "fullName"length: 8[[Prototype]]: Array(0)
Object.values(student1);

Object.entries(student1);

// Sets

const letterSet1 = new Set(["a","b","c","a"]);

letterSet1.add("a");
// Set(4) {'a', 'b', 'c', 'd'}[[Entries]]0: "a"1: "b"2: "c"3: "d"size: 4[[Prototype]]: Set
letterSet1.has("z");
// false

letterSet1.delete("a");
// true

letterSet.keys();
//SetIterator {'a', 'b', 'c'}
letterSet.values();
//SetIterator {'a', 'b', 'c'}
letterSet.entries();

// Maps

const fruitsMap = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

 // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200} 


fruitsMap.get("apples");

fruitsMap.set("mango", 250);
// Map(5) {'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'guava' => 150, 'mango' => 250}
fruitsMap.set(true, "IamaMangoLover");


fruitsMap.keys()
// MapIterator {'apples', 'bananas', 'oranges', 'guava', 'mango', …}
fruitsMap.values()
// MapIterator {500, 300, 200, 150, 250, …}
fruitsMap.entries()


// JSON

const studentJson = JSON.stringify(student1);

myOrginalObj = JSON.parse(studentJson);