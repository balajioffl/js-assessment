// 1. Given an array Arr[] of N integers, write a function to find the sum of the values at the even
// index positions and the odd index positions separately.

// let array=[1,2,3,4,5,6,7,8,9];
// let odd=[];
// let even=[];
// let oddsum=0;
// let evensum=0;

// for(let i=0;i<array.length;i++)
// {
//     if(array[i]%2!=0)
//     {
//         even.push(array[i]);
//     }
//     else if(array[i]%2==0)
//     {
//         odd.push(array[i]);
//     }
// }

// for(let j=0;j<odd.length;j++)
// {
//     oddsum+=odd[j];
// }

// for(let k=0;k<even.length;k++)
// {
//     evensum+=even[k];
// }

// console.log("Sum of odd indices " +oddsum);
// console.log("Sum of even indices " +evensum);


// 2. Given an array of numbers, write a function in JavaScript that removes all the duplicates from
// the array and returns a new array with only the unique values. Ensure that your solution is
// efficient in terms of time complexity. If there are no duplicates, return the array as


// let numbers = [1, 2, 2, 3, 9, 4, 5, 7,9,2,2];
// let check=[...numbers];
// // to remove duplicate numbers

// for(let i=0;i<check.length;i++)
// {
//         for (let j=i+1; j<check.length; j++)
//         {
//            if(check[i]==check[j])
//             {
//                 check.splice(j,1);
//                 j--;
//             }
//         }
// }
// console.log("Given Array !");
// console.log(numbers);

// console.log("Filtered Array !");
// console.log(check);


// 3. Given a string, you need to remove only two consecutive duplicates from the
// string(removeConsecutiveDuplicates(str)). If no two consecutive characters are found, return
// the string as it is :

// let input = "aabccbdddc";
// let remove = [...input];

// for(let i=0;i<remove.length;i++)
// {
//     for(let j=i+1;j<remove.length;j++)
//     {
//         if(remove[i]==remove[j])
//         {
//             remove.splice(i,2);
//         }
//     }
// }
// console.log("Given String !");
// console.log(input);

// console.log("After removing duplicates !");
// console.log(remove.join(''));


// 4. Write a function sortBooleansAndIntegers(arr) that takes an array of booleans, integers
// and sorts the booleans first ( with false before the true), followed by the integers in ascending
// order .

// function sort()
// {
//     console.log("Given Array !")
//     console.log(array);

//     // to sort a array 
//     array.sort();

//     // to swap boolean and integer values
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]==false )
//         {
//             booleanarray.push(array[i]);
//         }
//         else if(array[i]===true)
//         {
//             booleanarray.push(array[i]);
//         }
//     }
//     // console.log(booleanarray);

//     for(let j=0;j<array.length;j++)
//     {
//         if(array[j]>0 && array[j]!=true)
//         {
//             numberarray.push(array[j]);
//         }
//         else if(array[j]<0)
//         {
//             numberarray.push(array[j]);
//         }
//     }

//     // to sort numbers
    
//     for(let j=0;j<numberarray.length;j++)
//     {
//         for(let k=j+1;k<numberarray.length;k++)
//         {
//         if(numberarray[j]>numberarray[k]){
//            temp=numberarray[j];
//            numberarray[j]=numberarray[k];
//            numberarray[k]=temp;
//            // console.log(numberarray); 
//         }
//     }
// }
//     // console.log(numberarray);

//     // add two arrays
//     finalarray = booleanarray.concat(numberarray);
//     console.log("After sorting !");
//     console.log(finalarray);
// }

// let array=[true, -1, false, 2, true, -10];
// let booleanarray=[];
// let numberarray=[];
// let finalarray=[];
// let temp=0;
// sort();


// OBJECT 

// 5. Create a Fitness Tracker Application to manage user details, add user and exercise entries,
// track calories burned, and set fitness goals

// const fitnessApp = {

//     users:[],

//     adduser:function()
//     {
//         let name=prompt("Enter your name : ");

//         // to validate name 
//         if(name!="")
//         {
//             // this.users.push({name});
//         }
//         else
//         {
//             alert("Please enter a name !");
//             fitnessApp.adduser();
//         }1

//         // to validate age greater than 0
//         let age=parseInt(prompt("Enter a age : "));
//         if(age>0)
//         {
//             // this.users.push({age});
//         }
//         else
//         {
//             alert("Please enter a Valid age !");
//             fitnessApp.adduser();
//         }

//         // to generate ID 
//         let id=Math.floor(Math.random()*1000);
        
//         let weight=parseInt(prompt("Enter your weight : "));
//         let height=parseInt(prompt("Enter your height : "));

//         // to calculate BMI value
//         let bmivalue=weight/(height**2);

//         let goal;
//         if(bmivalue<=18.5)
//         {
//             goal="Increase calorie intake and gain weight.";

//         }
//         else if(bmivalue<=18.5 && bmivalue>=24.9)
//         {
//             goal="Maintain your current activity and diet.";
//         }

//         else if(bmivalue<=25)
//         {
//             goal ="Aim to burn more calories through exercise.";
//         }

//         console.log("User " +name+ " has added successfully with the BMI Value of " +bmivalue);
//         this.users.push({name,age,id,weight,height,bmivalue,goal});
//         console.log(this.users);

//     },

//     display:function()
//     {
//         console.log("List of users !");
//         console.log(this.users);
//     },

//     update:function()
//     {
//         let choice = prompt(" Enter a field to update \n 1. Update name \n 2. Update age \n 3. Update weight \n 4. Update height \n 5. Exit");

//         // update name
//         if(choice==1)
//         {
//             let update_name=Number(prompt("Enter your ID to update :"));
//             let newname=prompt("Enter a new name to update : ");
        
//             for(let i=0;i<this.users.length;i++)
//             {
//                 if(this.users[i].id==update_name && newname!="")
//                 {
//                     this.users[i].name=newname;
//                     console.log("Username updated successfully !" );
//                 }
//                 else
//                 {
//                     alert("Please enter a name ! ");
//                     break;
//                 }
//             }
            
//         }

//         // update age
//         if(choice==2)
//         {
//             let update_age=Number(prompt("Enter your ID to Update : "));
//             let newage=parseInt(prompt("Enter a new age to update : "));
//             for(let j=0;j<this.users.length;j++)
//             {
//                 if(this.users[j].id==update_age && newage>0)
//                 {
//                     this.users[j].age=newage;
//                     console.log("Age has been updated successfully !" );
//                 }
//                 else
//                 {
//                     alert("Please enter a valid age !");
//                     break;
//                 }

//             }
//         }

//         // update weight
//         if(choice==3)
//         {
//             let update_weight=Number(prompt("Enter your ID to Update : "));
//             let newweight=parseInt(prompt("Enter a new weight to update : "));
//             for(let k=0;k<this.users.length;k++)
//             {
//                 if(this.users[k].id==update_weight)
//                 {
//                     this.users[k].weight=newweight;
//                     console.log("Weight has been updated successfully !" );
//                 }
//                 else
//                 {
//                     alert("Please enter a valid weight !");
//                     break;
//                 }
//             }
//         }

//         // update height
//         if(choice==4)
//             {
//                 let update_height=Number(prompt("Enter your ID to Update : "));
//                 let newheight=parseInt(prompt("Enter a new height to update : "));
//                 for(let l=0;l<this.users.length;l++)
//                 {
//                     if(this.users[l].id==update_height)
//                     {
//                         this.users[l].height=newheight;
//                         console.log("height has been updated successfully !" );
//                     }
//                     else
//                     {
//                         alert("Please enter a valid height !");
//                         break;
//                     }
//                 }
//             }
//     }, 

//     delete:function()
//     {
//         let deleteuser=Number(prompt("Enter your ID to Update : "));
//         for(let d=0;d<this.users.length;d++)
//         {
//             if(this.users[d].id==deleteuser)
//             {
//                 this.users.splice(d,1);
//                 console.log("User has been deleted successfully !" );
//             }
//         }
//     }
// }

// while(true){
//     let option = prompt(" Fitness Tracker Application \n 1. Add users \n 2. Display users \n 3. update user \n 4. delete user \n 5. Exit");
//     if(option==1)
//     {
//         fitnessApp.adduser();
//     }
//     else if(option==2)
//     {
//         fitnessApp.display();
//     }
//     else if(option==3)
//     {
//         fitnessApp.update();
//     }
//     else if(option==4)
//     {
//         fitnessApp.delete();
//     }
//     else if(option==5)
//     {
//         break;
//     }

// }

