#Shooters-Log-graphql  

#Overview

This GraphQL API provides the necessary back-end infrastructure and functionality to create, read, update and delete data related to competitive shooting.  This API could be utilized by companies that currently produce shooting related data books, to allow their customers to collect and store data in a digital format. Currently, data for shooting events is manually recorded after each shot during an event. The score is typically recorded using a pencil and a paper document like the scorecard below.

sco

Manual data collection is a burdensome process that can be greatly reduced or eliminated through the adoption of automation. This API will allow an application developer to collect data once and use that data to update all of the associated data sheets views for teh user.  Those related data views include: 

  * Competition Score Card  
  * Aggregate Score Card   
  * Load Development Book  
  * Round Count Book  
  * Detailed Data Card  

This API provides a means to reduce the redundancy for the shooter and the range master. It provides an infrastructure and data persistence that can be easily consumed by applications (both client and web based) using the GraphQL standard. By providing this API and supporting infrastructure, we are encouraging developers to create applications that can provide value to the shooting community and a source of income for themselves.

#Current Version (0.1.0)

The current version of this program does support collecting, updating, deleting, and fetching data from GraphQL clients by leveraging the GraphQL standards.  That data can update scorecards as well as all other related data sheets identified above. 

#Way to contribute

Reporting Bugs: Open up an issue through this git repository and select "bug" as the label
Recommending Enhancements: Open up an issue through this git repository and select "enhancement" as the label
Issues are reviewed monthly

#Architecture

The base technologies are node.js server, GraphQL, express middleware, express-graphql, mongoose ODM and a mongo database. This architecture is currently deployed in a two tier environment(staging, production), leveraging the heroku platform.

![graphql-simple-server-arch](https://user-images.githubusercontent.com/13153982/39408500-0dc57b04-4b8c-11e8-950b-a780717d6cd2.png)

Middleware:

Authentication: An auth middleware module leverages two npm modules (bcrypt, jsonwebtoken) and the node.crypto module to provide user sign-up and user sign-in functionality as well as session authentication/authorization  

Routing: The express router middleware provides the base routing capability.    

The mongoose npm module is used for interaction with the mongo database
architecture5


Controller: Individual resources (user, match, load...) have dedicated controller files. These files are the interface between the routers (view) and the model files and mongo database(model). The controllers take in a request from a route and call the necessary functions to interact with the model. They then return a response to the route once a request has been processed in the model:

mongoose: The controller files leverage the required mongoose client module to create new schemas in the mongo database and to execute CRUD operations on mongo documents. Currently supported resources include:  
  * user
  * competition
  * match
  * shot
  * rifle
  * barrel
  * load  
  
Model: Individual resources (user, match...) have dedicated model files. These files provide the constructors and the mongoose schema creation syntax. For a detailed breakdown of models and the model properties, see the schema section below.

#Schema ###MVP Schema Diagram

###Currently Deployed Schema Diagram   

#Installation  

#Usage   

#Credits  

#License  
