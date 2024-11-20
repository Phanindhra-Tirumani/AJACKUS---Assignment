In this project, let's build a **User Management Dashboard
** by applying the concepts we have learned till now.



###API Details
API Base URL: https://jsonplaceholder.typicode.com/
End Points:
GET /users: Fetch a list of users.
POST /users: Add a new user (simulated).
PUT /users/{id}: Update an existing user (simulated).
DELETE /users/{id}: Delete a user (simulated).
Note:
The API used in this project is a mock API (JSONPlaceholder), meaning changes made to the users are not persistent. It's used only for testing and demonstration purposes.



### Set Up Instructions
Prerequisites
Ensure that you have Node.js and npm installed. If not, you can download and install them from Node.js official website.

Steps to Run the Project
Clone the repository:

bash
Copy code
git clone <repository-url>
cd user-management-dashboard
Install dependencies: Install all required dependencies using npm:

bash
Copy code
npm install
Run the application: Start the development server:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

Open your browser and visit http://localhost:3000 to view the app in action.



### Completion Instructions

App.js: Main entry point of the application that manages state, interacts with the backend API, and renders UserForm and UserList.
UserForm.js: A component for adding or editing user details.
UserList.js: A component that displays the list of users with options to edit or delete.
styles.css: Global styles for the application.
UserForm.css and UserList.css: Component-specific styles for the form and the user list.

Project Structure
bash
Copy code
/user-management-dashboard
│
├── /src
│   ├── /components
│   │   ├── /UserForm
│   │   │   ├── UserForm.js
│   │   │   └── UserForm.css
│   │   ├── /UserList
│   │   │   ├── UserList.js
│   │   │   └── UserList.css
│   ├── App.js              # Main entry point (root component)
│   ├── index.js            # Renders the App component
│   └── styles.css          # Global styles (optional)
├── package.json
└── README.md



### Important Note

<details>
<summary>Click to view</summary>
<br/>
**The following instructions are required for the tests to pass**

- Achieve the given layout using only Conditional Rendering
</details>

### Technologies Used
React: JavaScript library for building the user interface.
Axios: Promise-based HTTP client for making API requests.
JSONPlaceholder: A free online REST API for testing and prototyping.
CSS: For styling the components.

<details>
<summary>Font-families</summary>

- Roboto

</details>

### Features

View Users: Fetch and display a list of users from the mock backend.
Add User: Add a new user through a form (simulated via the API).
Edit User: Edit an existing user's details and update the user data (simulated via the API).
Delete User: Delete a user from the list (simulated via the API).
Responsive Design: The app is mobile-friendly.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
