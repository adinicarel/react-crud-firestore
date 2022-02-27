# App using FireBase database to perform CRUD action: create, read, update, delete objects

The App is built with React and TypeScript.

I used FireBase functions to communicate with the server:
    - onSnapshot - get instant server/ collection data;
    - addDoc - add new object to the DB
    - setDoc - update object info
    - deleteDoc - delete object form DB

I chose Firebase for the ease-of-use and swift performance while updating the UI in real-time.

For data handling in my components I used various techniques, mostly for demo purpose :
    - React state with useState
    - localStorage with React useState - inside custom hook
    - React Router to pass data inside URL params to updatePage - using useNavigate and useLocation 

    [
        in a real more complex App this would probably be best arranged with 1 context, (+ localStorage) and useReducer for setting different state actions on the 3 types of state: add / update / delete object 
    ]

The App is aimed to allow user perform CRUD operations and be able to see the changes happen by navigating to the main page where all objects are rerendered.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
