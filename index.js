// Question 34
let pizza = ["Kabab krust", "Chicken Tikka", "Fajita"];
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
console.log("Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ");
// Question 35
let animal = ["lion", "tiger", "elephant"];
for (let pet of animal) {
    console.log(pet);
}
for (let pet of animal) {
    console.log(`A ${pet} would make a great pet.`);
}
console.log("All of these animals eat meat and I like tiger.");
// Question 36
function make_shirt(size, message) {
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt("small", "My name is Maham Jabbar");
export {};
