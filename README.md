TASK
--
Our team has been asked to work with a new HTTP API that provides iPlayer with lists of programmes sorted alphabetically.
Your task is to use the API to generate an A-Z listing for the website.
A simple web page that will list out all the content to be viewed on different devices.

Each of the listing pages should include:

- a list of programme titles and images
- the ability to paginate if the letter has more than 20 results
- navigation to other letters

Further requirements:
- implement solution in PHP/ node.js or any appropriate (i.e. non-obscure) language.
- TDD being applied in this exercise.


DOCS
---

*LIVE DEMO*  
https://protected-river-14148.herokuapp.com

For setup run each of the following commands:
* `npm install`
* `npm run bower`

Start server with `npm start`  
Find project at: [http://localhost:3000](http://localhost:3000)

*TESTS*  
Server side: `npm run mocha`  
Client side: `npm test`

End-to-end:  
Run all three at the same time
* `npm start`
* `npm run webdriver`
* `npm run e2e`
