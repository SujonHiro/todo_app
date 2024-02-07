# React Todo Application

This is a simple Todo application built with React.js. It allows users to create, update, delete, and filter tasks based on their status and priority.



## Features

- Create new tasks with a name and priority.
- Mark tasks as completed or incomplete.
- Update existing tasks.
- Delete tasks.
- Filter tasks by status (completed/incomplete) and priority.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
2.Navigate to the project directory:
cd react-todo

3.Install dependencies:
npm install

Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to view the application.

Create tasks by entering a task name and selecting its priority. Click "Create Task" to add it to the list.

Mark tasks as completed by checking the checkbox next to them.

Update tasks by clicking the edit icon next to them. Make changes and click "Update Task".

Delete tasks by clicking the delete icon next to them.

Filter tasks by status (completed/incomplete) and priority using the dropdown menus.

Technologies Used
React.js
React Icons
Local Storage
Folder Structure
kotlin
Copy code
react-todo/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Todo.js
│   │   └── ...
│   │
│   ├── helper/
│   │   ├── color.js
│   │   ├── data.js
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
└── README.md
