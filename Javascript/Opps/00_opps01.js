// const obj={
//     "name":"aakib",
//     "age": 20,
//     "greet":function(){
//         console.log('Hi, Aakib Ali, How are you !')
//     }
// }



// console.log(obj.greet())
// console.log(obj)
// console.log('\n')
// obj.greet()


// create constructor funtion
// function person(Name,Age){
// 2...................................
//    this.Name=Name;
//     this.Age=Age;
//     this.greet=function(){
//         console.log("This is consructor funtion")
//     }
// }
// const details=new person("AAKIB",393);
// details.greet();
// console.log(details)


// creating objects using clases
// 3****************************************************************************************

// class student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     Admission(){
//         console.log(`If you want to take addmission, so need to tell me ${this.name} and ${this.age}`)
//     }
// }

// const stu=new student('AAKIB ALI',289);
// stu.Admission()

// 4..**************************************************************************************
// using Object.create

//  const Animal={
//     speak(){
//         console.log("This is my animals");
//     }
//  }
//  const cat=Object.create(Animal);
//  console.log(cat)
//  cat.speak()

// 5..********************************************************************************************
// Operation with js objects
const users={
    name:"AAKIB ALI",
    'user_role': "Admin",
    age:383
}
// console.log(users.name);
// console.log(users.user_role)


// itration over the key of objects
for(let key in users){
    console.log(`${key} : ${users[key]}`)
}