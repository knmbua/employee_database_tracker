import client from '../config/connection.js';

export async function getAllDepartments() {
    const sql = `
    SELECT 
        id,
        name
    FROM department
    `;
    const { rows } = await client.query(sql);
    return rows;
}

export async function getAllRoles() {
    const sql = `
    SELECT 
        role.id,
        role.title,
        role.salary,
        department.name AS department_name
    FROM role
    JOIN department
        ON role.department_id = department.id
    `;
    const { rows } = await client.query(sql);
    return rows;
}

export async function getAllEmployees() {
    const sql = `
    SELECT 
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title AS role_title,
        department.name AS department_name,
        role.salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
    FROM employee
    JOIN role
        ON employee.role_id = role.id
    JOIN department
        ON role.department_id = department.id
    LEFT JOIN employee AS manager
        ON employee.manager_id = manager.id
    `;
    const { rows } = await client.query(sql);
    return rows;
}

export async function createEmployee(department_id: number, role_id: number, first_name: string, last_name: string) {
    const sql = `
    INSERT INTO employee (department_id, role_id, first_name, last_name)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
    const values = [department_id, role_id, first_name, last_name];
    const { rows } = await client.query(sql, values);
    return rows[0];
}