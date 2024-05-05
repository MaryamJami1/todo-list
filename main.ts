#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList:any = [];
let condition = true;

console.log(chalk.magenta.underline.bold("\n \t Wellcome To Todo-List App\n"));

let main = async () =>{

    while (condition) {
        let option = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select an option you want to do:",
                choices:["Add Task" , "Delete Task" , "Update Task" , "View Todo-List" , "Exit"]
            }
        ]);

        if(option.choice === "Add Task"){
            await addTask()
        }

        else if(option.choice === "Delete Task"){
            await deleteTask()
        }

        else if(option.choice === "Update Task" ){
            await updateTask()
        }

        else if(option.choice === "View Todo-List"){
            await viewTask()
        }

        else if(option.choice === "Exit"){
            condition = false;
        }

        
    }
}

// function to add new task

let addTask = async () =>{

    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter Your New Task"
        }
    ]);

   todoList.push(newTask.task);
   console.log(`\n ${newTask.task} Task added successfuly in todo-list`);
}

// function to view all task

let viewTask = ()=>{
    console.log("\n Your todo-list: \n");
   todoList.forEach ((task:any, index:any) => {
    console.log(`${index + 1}: ${task}`);
   });
}


// function to delete a task

let deleteTask = async( ) =>{
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no.' number of task you want to delete:",
        }
    ]);

    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your todo-list\n`);
}



//function to update a task
 let updateTask = async () =>{
   await viewTask()
   let update_task_index = await inquirer.prompt([
    {
        name:"index",
        type:"number",
        message:"Enter the 'index no.' number of task you want to update:"
    },

    {
        name :"new_task",
        type:"input",
        message:"Now enter new task name:",
    }
   ]);
   todoList[update_task_index.index - 1] = update_task_index.new_task
   console.log(`\n Task add index no. ${update_task_index.index - 1} updated successfully [for updates list check option "view todo-list"]`);
   
 }

main();

