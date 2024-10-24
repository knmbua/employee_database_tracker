import inquirer from 'inquirer';
import 'console.table';
import { getAllDepartments, getAllRoles, getAllEmployees, createEmployee } from './query.js';
let showWelcome = false;
export async function addEmployee() {
    const departmentsArray = await getAllDepartments();
    const rolesArray = await getAllRoles();
    const { department_id, role_id, first_name, last_name } = await inquirer.prompt([
        {
            message: 'Please select the department',
            name: 'department_id',
            type: 'list',
            choices: departmentsArray.map((departmentObj) => {
                return {
                    name: departmentObj.name,
                    value: departmentObj.id
                };
            })
        },
        {
            message: 'Please select the role',
            name: 'role_id',
            type: 'list',
            choices: rolesArray.map((roleObj) => {
                return {
                    name: roleObj.title,
                    value: roleObj.id
                };
            })
        },
        {
            message: 'Enter the first name',
            name: 'first_name',
            type: 'input'
        },
        {
            message: 'Enter the last name',
            name: 'last_name',
            type: 'input'
        }
    ]);
    await createEmployee(department_id, role_id, first_name, last_name);
}
export async function showAllEmployees() {
    const employeeRowsArray = await getAllEmployees();
    console.table(employeeRowsArray);
}
export async function showMenu() {
    if (!showWelcome) {
        console.log('Employee Management System -----\n');
        showWelcome = true;
    }
    const { optionFunction } = await inquirer.prompt({
        message: 'Please select an option',
        name: 'optionFunction',
        type: 'list',
        choices: [
            {
                name: 'Show All Employees',
                value: showAllEmployees
            },
            {
                name: 'Add Employee',
                value: addEmployee
            },
            {
                name: 'Quit',
                value: 0
            }
        ]
    });
    if (optionFunction !== 0) {
        await optionFunction();
        showMenu();
    }
}
showMenu();
//# sourceMappingURL=menu.js.map