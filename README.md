Reproduce a problem using `@testing-library/user-event` as an ES module.

There is a simple web component in `src/example-component.js` that has a label and a textfield and copies the typed value from the textfield to the label.

To try this component by hand you can open the `src/index.html` in your browser.

To test this behavior there is the `src/example-component.test.js`. This file uses `@open-wc/testing` to create fixtures for the web component
and tries to use `@testing-library/user-event` to simulate typing.
The tests are executed by `@web/test-runner` and playwright.

However, running the tests produces the error

>  SyntaxError: The requested module './../node_modules/@testing-library/user-event/dist/index.js' does not provide an export named 'default'

This cause of this error is that the bundle of `@testing-library/user-event` does not provide an ES module.
