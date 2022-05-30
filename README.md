# GOAL: 
Build a Todo app with delete, read and post functionality \
Check out deployment here: https://inv-todo.vercel.app/

# DOCUMENTATION

## COMPONENT STRUCTURE:

```
<App>
- <Header/>
- <AddNewTodoForm/>
- <TodosContainer completed = false >   - for the incomplete Todos
- - <SingleTodoItem/>                   - as many of these as needed
- <TodosContainer/>
- <TodosContainer completed = true >    - for completed Todos
- - <SingleTodoItem/>                   - as many of these as needed
- <TodosContainer />
<App/>
```

## MAJOR DEPENDENCIES:

### STYLED COMPONENTS
https://styled-components.com/docs/ \ 
The concept here is very simple. Developers create a component for styling and wrap its CSS in backticks. You put it right in your component file. \
EXAMPLE: 
```
const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 3%;
  font-weight: bold;
`;
```

## COMPONENTS DOCUMENTATION

### App.js
A standard React App component. Houses all other components in the app.

#### APP STATE:

[todoList, setTodoList]  

each Todo is an object: {id: number, text: string, isCompleted: boolean} --- if todoList is empty, id = 1. If not, add 1 to the highest id in todoList 

uses useEffect to check localStorage for todo list ; if none in localStorage, uses an empty array

#### FUNCTIONALITY

Its main function is to house all other components. It is also the central "brain" of statefulness and hosts a check local storage function to export to other components.

### Header.js

Very simple header. A h1 with "Inventora Todo" and a Delete All button which deletes items from global state and localStorage.

### AddNewTaskForm.js

user inputs new todo text, the form then adds that to global state and localStorage 

### TodosContainer.js

Can either host incomplete or complete todos based on value passed to it 

Has heading of "To-Do" or "Completed" based on which boolean it's hosting 

Is an unordered list of to-do items 

Appears twice in the app.

In its first appearance, it maps over todo list and displays incomplete todos. 

In second appearance, it maps over todo list and displays completed todos. 

### SingleTodoItem.js

a li that can either display completed todos or incomplete todos 

Has a checkbox, todo text and a delete button 

Checkbox is checked if todo is completed, unchecked if todo is not completed 

Delete button deletes item from page and from localStorage

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
