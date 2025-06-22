"use strict";
function printLegal(users) {
    for (let user of users) {
        user.age >= 18 && console.log(user.name);
    }
}
const testUsers = [
    { name: 'Vipul', age: 22 },
    { name: 'Amit', age: 17 },
    { name: 'Sneha', age: 19 },
    { name: 'Karan', age: 15 }
];
printLegal(testUsers);
