\c postgres;

DROP DATABASE IF EXISTS employee_db_tracker;
CREATE DATABASE employee_db_tracker;

\c employee_db_tracker;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL REFERENCES department(id)
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL REFERENCES role(id),
  manager_id INT REFERENCES employees(id)
);