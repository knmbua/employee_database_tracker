# Employee Database Tracker

## Description

The Employee Database Tracker is a command-line application that allows users to manage a company's employee database. The application provides functionality to view all employees, add new employees, and view employee details along with their roles and departments. The application uses PostgreSQL as the database and is built with Node.js and TypeScript.


### Folder Descriptions

- **db/**: Contains the SQL scripts for creating tables and inserting initial data.
  - `schema.sql`: SQL script to create the necessary tables.
  - `seed.sql`: SQL script to insert initial data into the tables.
- **config/**: Contains the database connection configuration.
  - `connection.ts`: Configures and establishes the connection to the PostgreSQL database.
- **lib/**: Contains the application logic for interacting with the database.
  - `query.ts`: Functions to interact with the database (e.g., get all departments, roles, employees, and create a new employee).
  - `menu.ts`: Menu and user interaction logic.
- **main.ts**: The main entry point for running the application.
- **package.json**: Manages the project's dependencies and scripts.
- **tsconfig.json**: Configures TypeScript for the project.

## Setup Instructions

### Installation

- Node.js 
- NPM
- Inquirer
- PG package
- PostgreSQL 

### Usage

Step 1: Clone the Repository

Clone the repository to your local machine then navigate to 'employee_db_tracker'
To open app run 'npm run build' in your terminal

### Video Walkthrough
https://drive.google.com/file/d/1K4roav0SRTFzLU0o-tkMMQls_kE3pnd7/view

### Questions

If you have any questions about the project, please email me at knhopkinson23@gmail.com