#!/usr/bin/env node

import inquirer from "inquirer";
let condition =true;

let todolist=[];
while (condition){
    let addTask=await inquirer.prompt([{
        message:'Add the items in the list',
        type:"input",
        name:"todoitems"
    },
    {
        message:"Do you want to add more items in the list",
        type:"confirm",
        name:"addMore",
        default:"false"
    }
])
todolist.push(addTask.todoitems)
condition=addTask.addMore
}
console.log(todolist)
