// const myName="vaibhav"
// let userName="abc"
// var password="1234"
// location="sangola"

// console.table([myName,userName,password,location])

// // myName="vishal"
// userName="xyz"
// password="2312"
// location="hatid"
// console.table([userName,password,location])
// console.log(typeof(location));
// console.log(typeof(myName));

// let myNumber = 10;
// let myString = String(myNumber);
// console.log(myString);

// let name="vaibhav";
// let number=Number(name);
// console.log(number);
// console.log(typeof(number));

// let num=1;
// let isCommited=Boolean(num);
// console.log(isCommited);

// const bigint = 123456789n;
// console.log(bigint);

// const num=100;
// const myString= num.toFixed(3);
// console.log(myString)

// console.log(Math.random())
// const num= Math.random();
// console.log(num);
// console.log(Math.ceil(num*10))

// const myName = new String("Vaibhav")
// console.log(myName.at(-7))

// const str1= "Vaibhav"
// const str2="Bhagat"
// const str3="btech"
// const str4="engineer"

// console.log(str1.concat(str2,str3,str4))

// const para="   hey my name is my moms vaibhav"
// const para1="hey my name is my moms vaibhav"
// // console.log(para.replaceAll("my","MY"))
// const isMatch=para.match("moms")
// console.log(isMatch.index)

// console.log(para)
// console.log(para.trim())

// if(para.trim()===para1){
// console.log(+true)
// }else{
//     console.log(+false)
// }

// const obj1={
//     "name":"vaibhav",
//     lname:"Bhagat",
//     sign:true,
// }
// const obj2={
//     education:"btech",
//     aggregate:86,
//     "passout year":"2023"
// }
// const {education} = obj2
// console.log(education)


// const obj3 ={...obj1,...obj2}
// console.log(obj3)
// console.log(obj2.education)

// console.log(obj["name"],obj["lname"],obj.sign)
// console.table(obj["name"],obj["lname"],obj.sign)
// console.table

// const arr=[1,2,3]
// const arr2=[4,5,6]
// // const arr1=[a,b,c]
// const newArr={...arr,...arr2}
// const final={...arr,...arr2}
// console.log(final)
// // console.log(newArr)
// console.log(arr.concat(arr2))

// const studentName={
//      1:"Vishal",
//      2:"sayali",
//      3:"harshada",
//      4:"adnan",
//      5:"vaibhav"
// }

// const {1:dk}= studentName
// console.log(dk)
// console.log(studentName)
// console.log(studentName.hasOwnProperty('1'))
// console.log(studentName.isPrototypeOf())

// console.log(Object.keys(studentName))
// console.log(Object.values(studentName))


// const arr1=[1,2,3,4,5]
// const arr2=["Vishal","Sayali","Harshada","Adnan","Vaibhav"]

// const arr3= [...arr1,...arr2]
// console.log(arr3)
// console.log(arr1.concat(arr2))

// function userLoginDetails(userName){
//      if(!userName)
//      {
//           console.log("please enter user name")
//           return
//      }
//      console.log(`${userName} just logged in`)
// }
// userLoginDetails("vishal")

// function calculateCartMoney(...num1){
// //   console.log(num1[0])
//   let sum=0;
//   {
//    for(i=0;i<num1.length;i++)
//    {
//      sum=sum+num1[i]
//    }
//    return sum
// }
// }
// console.log(calculateCartMoney(10,20,30))

// var sum=10
// if(true)
// {
//      var sum=130
//      console.log(sum)
// }
// console.log(sum)

// const obj = {
//      name:"vaibhav",
//      price:9999,
//      naam:"shekhar",
//      mob_no:3655666556666,
//      greeting:function(){
//           console.log(`hey ${this.naam} welcome to the course`)
//      }
// }

// obj.greeting()
// obj.name="vishal"
// obj.greeting()

// function sayMyName(name)
// {
//      console.log(name)
// }
// sayMyName("1")

// const sayMyName1 = function(name1){
//      console.log(name1)
// }
// sayMyName1(2)

// const sayMyName2 = (name2) => {
//      console.log(name2)
// }
// sayMyName2(3)

// const sayMyName3 = (name3) => console.log(name3)
// sayMyName3(4)

// const sayMyName4 = (name4) => (console.log(name4))
// sayMyName4(5)

// function outer(){
//      let myName="vaibhav"
//     const inner = () =>
//      {
//           console.log(this.myName)
//      }
//      inner()
// }
// outer()

// const check = (name) =>{
//      return this.name
// }
// console.log(check("vaibhav"))

// (function simple()
// { 
//      console.log("simple")
// })();

// ((name) =>{
//      console.log(name)
// })("vaibhav");

// const greeting ="hello user"

// for (const i of greeting) {
//     if(i===" ")
//     {
//         continue
//     }else{
//         console.log(i)

//     }
// }

// const arr =["vaibhav","Gajanan","Bhagat"]
// arr.forEach( (item)=>{
//     console.log(item)
// })
// const arr1 =["vaibhav","Gajanan","Bhagat"]
// arr1.forEach(function(item){
//     console.log(item)
// })

// function print(item)
// {
//     console.log(item) 
// }
// const arr1 =["vaibhav","Gajanan","Bhagat"]
// arr1.forEach(print)

// const obj=[
//     {
//         roll:1,
//         name:"vishal"
//     },
//     {
//         roll:2,
//         name:"harshada"
//     }
// ]

// obj.forEach( (item,index)=>{
//     console.log(item.roll,index)
// })

// const myNums =[1,2,3,4,5]
// const result = myNums.filter( (num) => num>2)
// console.log(result)

// const finalResult = myNums.map((num1)=> num1+10)
// console.log(finalResult)

// const result1= myNums.reduce( (acc,curr)=> acc+curr,0)
// console.log(result1)

// const result2 = myNums.reduce((curr,acc)=>{
//     console.log(`curr : ${curr} acc : ${acc}`)
//     return acc+curr
// },3)
// console.log(result2)

// (function myName(){
//     console.log("vaibhav")
// })();
const dom = new JSDOM(html).window.document
const numbers = dom.getElementById("numbers")
// document.getElementById("numbers").addEventListener("click",function(e){
   numbers.addEventListener("click",function(e){

    console.log(e)
},false)