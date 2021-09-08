//Data types
//1.Primitive
//2.Referential

//Primitive data types
//1.string
var name="vengalreddy";
console.log(name);
console.log(typeof name);
//2.number
var x=234;
console.log(x);
console.log(typeof x);

//3.Boolean
var y=true;
console.log(y);
console.log(typeof y);

//4.undefined
var a=undefined;
console.log(a);
console.log(typeof a)
//5.null
var val=null;
console.log(val);
console.log(typeof val)

//6.synbol
var some=Symbol();
console.log(some)
console.log(typeof some)

//Conditional Statements

//1.if and else

var age=28;
if(age<=20){
    console.log("not eligible to marry")
}
else if(age>20 & age<=30){
    console.log("marry age")

}
else{
    console.log("become old")
}

//2.Switch statement

var dice=3;
switch(dice){
    case 1:
        console.log("you got one")
        break;
    case 2:
        console.log("you got two")
        break;
    case 3:
        console.log("you got three")
        break;
    default:
        console.log("invalid")
}

//Operators

var t=2;
var u=5;
console.log(t+u);
console.log(t-u);
console.log(t/u);
console.log(t*u);
console.log(t%u);
console.log(t**u);

// Equal operators

var b=10
var c='10';
console.log(b==c);
console.log(b===c);

//looping statements

//For loop

var sum=2;
for(i=1;i<=10;i++){
    var res=sum+i;
}
console.log(res);

//While loop
var n=0;
while(n<=5){
    var count=n*2;
    n++;
}
console.log(count);

//Functions

function hello(){
    console.log("hello world!")
}
hello();

//

function add(a,b){
    var res=a+b;
    return res;
}
var finalRes=add(9,8);
console.log(finalRes)

//function hoisting
//calling a function before assigning
var finalRes=add(9,8);
console.log(finalRes)
function add(a,b){
    var res=a+b;
    return res;
}


//function expression

var mul=function(a,b){
    var multiply=a*b;
    return multiply;
}
var multiplyRes=mul(2,5);
console.log(multiplyRes);

//Arrays

var fruits=['apple','mango','banana','grapes']
console.log(fruits[0]);
console.log(fruits[3]);

//to find length of array

console.log(fruits.length);

//adding and deleting elements from end of the array

fruits.push('orange');
console.log(fruits);

fruits.pop();
console.log(fruits)

//adding and deleting elements from starting of the array

fruits.unshift('strawberry');
console.log(fruits);

fruits.shift();
console.log(fruits);

//adding and deleting an element from specific position

fruits.splice(1,0,'custard apple','pineapple')
console.log(fruits);

fruits.splice(1,1);
console.log(fruits);

//extraction of array

var animals=['dog','cat','lion','tiger','chetah'];
var newarr=animals.slice(1,4);
console.log(newarr);
//merging of an array

var colors=['red','green','yellow']
var colors1=['grey','blue']
var newArray=colors.concat(colors1);
console.log(newArray) 

//Objects

var person={
    name:'vengalreddy',
    age:'21',
    city:'hyderabad',
    gender:'male'
};
console.log(person.name)
console.log(person['age']);
//adding new key value pair
person.number=7993069718;
console.log(person);

//updating 
 person.age=20;
 console.log(person.age);
//
 var person={
    name:'vengalreddy',
    age:'21',
    address:{
        city:'hyderabad',
        landmark:'lb nagar',
        pincode:890654

    },
    gender:'male'
};
console.log(person.address.landmark)
console.log(person['address']['pincode'])

//function within the objects is called methods

var student={
    name:'vengalreddy',
    age:20,
    display:function(){
        console.log("hello,vengalreddy")
    },
};
student.display()

//ES6
 function varTest(){
     var x=5;
     if(true){
         var x=9;
         console.log(x);
     }
     console.log(x);
 }
 varTest();

 function es6Test(){
     let x=2;
     if(true){
         let x=8;
         console.log(x);
     }
     console.log(x);
 }
 es6Test();

 //arrow functions

 var add=(a,b)=>{
     return a+b;
 }
  let sum2=add(9,6);
  console.log(sum2)


  //Array helper methods
  //1.ForEach()

  let arr=[1,5,6,7];
  let sum3=0;
  let arr1=arr.forEach((item)=>{
      sum3=sum3+item;
  });
  console.log(sum3)

  //map

  let arr2=[1,5,6,7];
  let arr3=arr2.map((item)=>{
      return item*5;
  });
  console.log(arr3);
  console.log(arr2)

  //3.filter
  let arr4=[1,5,6,7];
  let arr5=arr4.filter((item)=>{
      return item>3;
  });
  console.log(arr5)

  //reduce
const arr6  = [1, 4, 6, 9];
const req = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
},0);
console.log(req);

//destructuring

//array destructuring

const electronics=['tv','fridge','washing machine']
const[first,second]=electronics;
console.log(first,second)

//object destructuring

const employee={
    name2:'vengalreddy',
    id:1234,
    role:'developer'
    
};
const{name2,id}=employee;
console.log(name2,id)

//spread operator for arrays
const string='hai';
console.log(...string)

const body=['head','neck','nose','hands']
console.log(...body);
const body2=['legs','stomach']
console.log(...body,...body2)

//spread operator for objects

const obj={
    name:'vengalreddy',
    city:'nellore',
    country:'india'

};
console.log({...obj})
console.log({...obj,lastname:'kummitha'})

//rest operator
const arr7=[1,4,6,7,0]
const[one, ...rest]=arr7
console.log(one,rest) 

