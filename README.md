Our team has been asked to work with a new HTTP API that provides iPlayer with lists of programmes sorted alphabetically.


Your task is to use the API to generate an A-Z listing for the website.
A simple web page that will list out all the content to be viewed on different devices.

Each of the listing pages should include:

- a list of programme titles and images
- the ability to paginate if the letter has more than 20 results
- navigation to other letters

You may implement your solution in PHP/ node.js or any appropriate (i.e. non-obscure) language. But please make sure your solution is working end-to-end and you include instructions for us to run and test your code. Please host your application on Heroku or similar and include a link.

We would like to see TDD being applied in this exercise.

View Resources tab for API details and submission guidelines.


DOCS
---

LIVE DEMO: (https://protected-river-14148.herokuapp.com/)[https://protected-river-14148.herokuapp.com/#]

Start server with `npm start`

TESTS

server side: `npm run mocha`
client side: `npm test`

End-to-end:
Run all three at the same time
* `npm start`
* `webdriver-manager start`
* `npm run e2e`
