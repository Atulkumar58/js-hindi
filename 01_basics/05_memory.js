//stack (Primitive data types) and heap (Reference data types)
//Primitive data types are stored in the stack, and reference data types are stored in the heap.

let myName = "abc";
let anothername= myName;
 
anothername= "def";
console.log(myName); // abc
console.log(anothername); // def

let user1 = {
    name: "abc",
    age: 20,
    email: "abc@example.com"
}
let user2 = user1; // user2 is a reference to the same object in the heap
user2.name = "def";
console.log(user1)
console.log(user2)