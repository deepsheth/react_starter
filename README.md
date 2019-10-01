## Setup


Install styled components with:
`npm install --save styled-components`

Install tests with:
`npm install --save enzyme enzyme-adapter-react-16`
The number corresponds to the version of react you're using in `package.json`

Create `setupTests.js` which Jest will look for before it runs any tests. It sets up the test suite before tests run.
Add the following code:
```js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```


## Enzyme Testing

```js
// Shallow Render test

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('Show correct number of CommentBoxes', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
});

```

```js
// Full rendering
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />)
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
  it('has a textarea that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
    
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has an empty textarea on submission', () => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });

    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(find('textarea').prop('value')).toEqual("")
  });
});

```

<hr/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
