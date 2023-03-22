## Lab Technical Requirements


# Lab 27

Refactor any components using this.setState() to implement the useState() react API hook.
Refactor the Form Component to implement user input from form elements, instead of hard coded string values.
Suggested Component Hierarchy and Application Architecture:

index.js - Entry Point.
<App /> - Container.
Holds application state: The Request (from the form) and the Response (from the API).
Hook that can update state.
Renders 2 Child Components.
<Form />
Expects a function to be sent to it as a prop.
Renders a URL entry form.
A selection of REST methods to choose from (“get” should be the default).
The active selection should be displayed/styled differently than the others.
Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
On submit:
Send the Form entries back to the <App /> using the method sent down in props.
Form will run the API request.
Toggle the “loading” status before and after the request.
<Results />
Conditionally renders “Loading” or the data depending on the status of the request.
Expects the count, headers, results to be sent in as props.
Renders the count.
Renders the Result Headers as “pretty” JSON.
Renders the Result Body as “pretty” JSON.

# Lab 28

Refactor application methods to allow for browser side HTTP requests to be sent.
Your implementation should allow the user to set a url, method, and request body.
Make sure all relevant request and response data is displayed to the User.
Suggested approach:

<Form /> component, onSubmit() sends the user’s entries to the <App /> via method sent in through props.
<App /> does a check on the request data from the form and updates the request variable in state with the url, method, and potentially the body.
<App /> has an effect hook that’s looking for changes to the request variable in state, and in response, runs the API request with the new request options from state.
<App /> updates state with the results of the API Request.
<Results /> sees the new API data as a prop and renders the JSON.

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

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## CodeSandbox Link

Lab 26
[CodeSandbox 26](https://codesandbox.io/p/github/afrey09/resty/base?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfipettr000zg5jr3ie51xtk%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfk8wyec00783b6i7xhjs58d%2522%253A%257B%2522key%2522%253A%2522clfk8wyec00783b6i7xhjs58d%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfk8wyed00793b6ii4016wrr%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfk8wyec00783b6i7xhjs58d%2522%252C%2522spacesOrder%2522%253A%255B%2522clfk8wyec00783b6i7xhjs58d%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

Lab27
[CodeSandbox 27](https://codesandbox.io/p/github/afrey09/resty/phase2?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfipettr000zg5jr3ie51xtk%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfj0c76h00ob3b6i3p8wt026%2522%253A%257B%2522key%2522%253A%2522clfj0c76h00ob3b6i3p8wt026%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfj0c76i00oc3b6iwhz2ywx8%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfj0c76i00od3b6i0g289mme%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfj0c76h00ob3b6i3p8wt026%2522%252C%2522spacesOrder%2522%253A%255B%2522clfj0c76h00ob3b6i3p8wt026%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

Lab28
[CodeSandbox 28](https://codesandbox.io/p/github/afrey09/resty/effect-hook?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfipettr000zg5jr3ie51xtk%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfk962gl00rh3b6i3x1pervw%2522%253A%257B%2522key%2522%253A%2522clfk962gl00rh3b6i3x1pervw%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfk962gn00ri3b6i5o8lpqyu%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfk962gn00rj3b6i9aeno2ng%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfk962gl00rh3b6i3x1pervw%2522%252C%2522spacesOrder%2522%253A%255B%2522clfk962gl00rh3b6i3x1pervw%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
