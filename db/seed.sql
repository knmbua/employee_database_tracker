\c employee_db_tracker;

INSERT INTO department (name) VALUES ('Engineering'), ('HR'), ('Sales');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('HR Manager', 60000, 2),
('Sales Representative', 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Jim', 'Brown', 3, NULL);