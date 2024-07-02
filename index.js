#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("*".repeat(80)));
console.log(chalk.green.yellowBright("\t\t\tMARKS CERTIFICATE"));
console.log(chalk.yellowBright("*".repeat(80)));
let english = [];
let math = [];
let urdu = [];
let sindhi = [];
let Total = 400;
let infoemation = [];
async function main() {
    let user = await inquirer.prompt([
        {
            type: "input",
            name: "Institute",
            message: chalk.redBright.bold `Enter Your Institute Name:`
        },
        {
            type: "input",
            name: "name",
            message: chalk.redBright.bold `Enter Your Name:`
        },
        {
            type: "num",
            name: "Roll",
            message: chalk.redBright.bold `Enter Your ROLL No:`
        },
        {
            type: "number",
            name: "eng",
            message: chalk.redBright.bold `Enter Your English Marks`
        },
        {
            type: "number",
            name: "math",
            message: chalk.redBright.bold `Enter Your Math Marks`
        },
        {
            type: "number",
            name: "urdu",
            message: chalk.redBright.bold `Enter Your Urdu Marks`
        },
        {
            type: "number",
            name: "sindhi",
            message: chalk.redBright.bold `Enter Your Sindhi Marks`
        }
    ]);
    infoemation.push(user.name);
    infoemation.push(user.Roll);
    infoemation.push(user.Institute);
    english.push(user.eng);
    math.push(user.math);
    urdu.push(user.urdu);
    sindhi.push(user.sindhi);
    console.log(chalk.yellowBright("*".repeat(30)));
    console.log(chalk.greenBright.bold(`Institute: ${infoemation[2]}`));
    console.log(chalk.greenBright.bold(`Name: ${infoemation[0]}`));
    console.log(chalk.greenBright.bold(`ROLL NO: ${infoemation[1]}`));
    console.log(chalk.greenBright.bold(`English Marks: ${english}`));
    console.log(chalk.greenBright.bold(`Math Marks: ${math}`));
    console.log(chalk.greenBright.bold(`Urdu Marks: ${urdu}`));
    console.log(chalk.greenBright.bold(`Sindhi Marks: ${sindhi}`));
    console.log(chalk.yellowBright("*".repeat(30)));
    console.log(chalk.yellowBright.bold(`Total Marks: ${Total}`));
    let OBT_mrks = english[0] + math[0] + urdu[0] + sindhi[0];
    console.log(chalk.yellowBright.bold(`OBT.Marks: ${OBT_mrks}`));
    let Percentage = (OBT_mrks / Total) * 100;
    console.log(chalk.yellowBright.bold(`Percentage: ${Percentage}`));
    // grade checking
    if (Percentage > 90 && Percentage < 100) {
        console.log(chalk.greenBright.bold("A1 GRADE"));
    }
    else if (Percentage > 70 && Percentage < 90) {
        console.log(chalk.greenBright.bold("A GRADE"));
    }
    else if (Percentage > 50 && Percentage < 70) {
        console.log(chalk.greenBright.bold("B GRADE"));
    }
    else if (Percentage > 30 && Percentage < 50) {
        console.log(chalk.greenBright.bold("C GRADE"));
    }
    else {
        console.log(chalk.redBright.bold("Fail"));
    }
}
main();
