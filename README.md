## The Task

The programming challenge exists in 2 parts:
* Part A: HTML + CSS
* Part B: Javascript

### PART A: HTML + CSS

![Screen](https://raw.githubusercontent.com/mcmakler/frontend-code-challenge/master/assets/fe_test_example_screen.png)

* Create a layout based on the given screen (fe_test_example_screen.png).
* Style the layout consistently and beautifully, adhering as closely to the design as possible.

### PART B: Javascript

* Consume our public API @ https://api.mcmakler.de/v1/advertisements to retrieve a list of advertisements of vacant apartments.
* Display the first 10 advertisements in the HTML + CSS layout created in step A, sticking to the layout, placing data where it fits.

## The Implementation

Libraries used:
* React - for building the view layer
* Redux - for state management

## Steps to Run

* Clone the project
* run _**npm install**_
* run _**npm run web-prod**_ - this will create the _**bundle.js**_ and also start up an express server on port 8000

## Future Additions
- [ ] create a detailed view for an advertisement
- [ ] use the capability of the code framework and build a RN app sharing the business logic with the web-client
