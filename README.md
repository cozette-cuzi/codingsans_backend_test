# CodingSans Backend Test Solution

The main goal is to create a web application which can authenticate via JWT (Json Web Token), and serve an API to GET a list of breweries filtered by a query based on the openbrewerydb.

The users endpoint ( `POST /users` ) adds a user to the database, 
Example: 
``{
    "username": "example",
    "password":"password"
}``

The login endpoint ( `POST /login` ) returns a signed JWT token on correct username/password.

The breweries endpoint ( `GET /breweries` ) guarded by a custom middleware.
The search param should be provided in the query params ( `GET /breweries?query=dog` )
If the user is not authenticated on `GET /breweries` return `401`.

You can start the project with `yarn start`. after adding the (`.env`) file in the root folder.
