// let x: number = 1;
// console.log(x);

// function greet(name: string){
//     console.log("Hello "+name)
// }
// function isLegal(age: number){
//     return age>17;
// }
// function fn(fn2: () => any){
//     setTimeout(()=>{
//         console.log(fn2())
//     },3000);
// }
// greet("Vipul")
// fn(()=>isLegal(18))

interface People{
    name:string,
    age:number,
    // greet:()=>string
}

// class Employee implements People{
//     name: string;
//     age: number;
//     salary:number;

//     constructor(name:string,age:number,salary:number){
//         this.name=name;
//         this.age = age;
//         this.salary=salary;
//     }
// }
// let a = new Employee("a",19,10000000)
// console.log(a.salary)


// let a : People={
//     name:"a",
//     age:19,
//     greet: ()=>{
//         return "hii"
//     }
// }
// console.log(a.greet());


//abstract class
// abstract class User{
//     name:string;
//     age=18;
//     constructor(name:string){
//         this.name = name;
//     }
//     abstract greet(): string;
//     hello(){ //major difference between abstract class and interface can also have implementation of methods
//         console.log("Hello")
//     }
// }
// class A extends User{
//     constructor(name:string){
//         super(name)
//     }
//     greet(): string {
//         return "Hii There "+this.name;
//     }
// }
// let user = new A("Vipul");
// console.log(user.greet());


// --------------- Type -------------------

// type User = {     difference ' = ',can't implement in a class, can do unions and intersections
//     name:string;
//     age:number;
// }

// //Assignment
// type User = {
//     name:string;
//     userPass:number;
// }
// type Admin = {
//     name:string;
//     adminPass:number;
// }

// type UserOrAdmin = User | Admin;
// function greet(user: UserOrAdmin): string{
//     return "Hii "+user.name; // can't use user.userPass || user.adminPass since it's not commont to both
// }
// let user: Admin={name:"Vipul",adminPass:1}
// console.log(greet(user))

// type UserAndAdmin = User & Admin;
// function greet(user: UserAndAdmin): string{
//     console.log(user.userPass)
//     return "Hii "+user.name; 
// }
// let user: UserAndAdmin={name:"Vipul",adminPass:1,userPass:2}
// console.log(greet(user))

//Array
// interface User{
//     name:string;
//     age:number;
// }

// function printLegal(users: User[]): void{
//     for(let user of users){
//         user.age>=18 && console.log(user.name)
//     }
// }
// const testUsers: User[] = [
//   { name: 'Vipul', age: 22 },
//   { name: 'Amit', age: 17 },
//   { name: 'Sneha', age: 19 },
//   { name: 'Karan', age: 15 }
// ];

// printLegal(testUsers);