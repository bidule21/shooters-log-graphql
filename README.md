#Shooters-Log-graphql  

#Overview

This GraphQL API provides the necessary back-end infrastructure and functionality to create, read, update and delete data related to competitive shooting.  This API could be utilized by companies that currently produce shooting related data books, to allow their customers to collect and store data in a digital format. Currently, data for shooting events is manually recorded after each shot during an event. The score is typically recorded using a pencil and a paper document like the scorecard below.

![matchscore450x348](https://user-images.githubusercontent.com/13153982/39408712-6f927834-4b8f-11e8-9001-4759cdda8736.png)

Manual data collection is a burdensome process that can be greatly reduced or eliminated through the adoption of automation. This API will allow an application developer to collect data once and use that data to update all of the associated data sheets views for the user.  The related data views currently supported include: 

  * Competition Score Card  
  * Aggregate Score Card   
  * Load Development Book  
  * Round Count Book  
  * Detailed Data Card  

This API provides a means to eliminate redundancy for the shooter who currently has to manually update each of the data books shown above with the same data. It provides an infrastructure and data persistence that can be easily consumed by applications (both client and web based) using the GraphQL standard. By providing this API and supporting infrastructure, we are encouraging developers to create applications that can provide value to the shooting community and a source of income for themselves.

#Current Version (0.1.0)

The current version of this program does support collecting, updating, deleting, and fetching data from GraphQL clients by leveraging the GraphQL standards.  That data can update scorecards as well as all other related data sheets identified above. 

#Way to contribute

Reporting Bugs: Open up an issue through this git repository and select "bug" as the label
Recommending Enhancements: Open up an issue through this git repository and select "enhancement" as the label
Issues are reviewed monthly

#Architecture

The base technologies are node.js server, GraphQL, express middleware, express-graphql, mongoose ODM and a mongo database. This architecture is currently deployed in a two tier environment(staging, production), leveraging the heroku platform.

![graphql-simple-server-arch-300x588](https://user-images.githubusercontent.com/13153982/39408555-0c70ca78-4b8d-11e8-889d-cc996cf2eb40.png)

Middleware:

  - Authentication: An appUser middleware function leverages two npm modules (bcrypt, jsonwebtoken) and the node.crypto module to provide user sign-up and user sign-in functionality as well as session authentication/authorization  

  - Routing: The express middleware provides the base routing capability. The express-graphql package further segments routing to route GraphQL  requests
  
  - GraphQL Queries, Mutaitons, Subscriptions: GrahQL.js processes GraphQL requests and response operations 

  - Object Document Mapper: The mongoose npm module is used as the interface between grpahql.js and the Mongo database.
 

#Schema  

The currenlty deployed schema supports the following Mongo database collections:  

  * Users  
  * Competitions  
  * Matches  
  * Rifles  
  * Barrels  
  * Shots  
  * Loads  


#Installation  

#Usage   

#Credits  

#License  
