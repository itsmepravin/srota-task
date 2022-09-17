## Made By Pravin Singh as an internship task for Srota/Pahelotape to apply for Frontend/Dataviz Intern role

## Please read this for all the changes made in every commit

## Created from create-react-app as requested. Uses only one library.

## First Commit

1. Make JSON schema that defines all form fields.
2. From that schema, it generates individual form fields.
3. No matter what the schema is, the form component is able generate it, as long as the structure of JSON schema is followed.

## Second Commit

1. User can save the typed information in localStorage.
2. They can see all the data that is present previously and added by them as long as localStorage is not cleared.
3. Use of small library called "react-filebase64" to easily deal with images. [React File Base64](https://www.npmjs.com/package/react-filebase64)
4. Moved one time use helpers functions and constants inside utils/helpers.js file.

## Third Commit

1. Moved all the states into one global object through use of useContext.
2. Moved all the styles into the css files instead of littering components.
3. Table UI moved to show infront rather than below.
4. Added [Font Awesome Icons(5.15.4)](https://fontawesome.com/v5/search) for clarity, through CDN link.
5. Fixed bugs that arose from moving the prop-drilling to global state object.
