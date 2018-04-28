#Shooters-Log-graphql  

#Overview

This GraphQL API provides the necessary back-end infrastructure and functionality to create, read, update and delete data related to competitive shooting matches.  It also supports the same for historical, detailed data collection and analysis for individual shooters.  This API could be utilized by companies that currently produce shooting related data books like Impact Data Books Inc, to allow their customers to collect and store data in a digital format. Currently, data for shooting matches is manually recorded after each shot during an event. The score is typically recorded using a pencil and a paper document like the scorecard below.

scorecard750x580

After a match is completed, the recorded data is then manually transferred to other documents for later retrieval and analysis. This is a burdensome process that can be greatly reduced or eliminated through the adoption of automation. This API will allow a application developer to collect data once and use that data to update all of the associated data sheets views.  Those related data sheets include:

Aggregate Score Card. This document or spreadsheet is created by the range master after an event when all the individual shooter score cards are handed in. It lists all the match and aggregate scores for each shooter in a match. This information is forwarded to the NRA in  a paper format, so that the NRA can track, and if necessary, change a shooters qualification level.

Load Development Book. This book contains very detailed information on the components that make up a specific load. It lists all the specific components of a load(primer, brass, bullet, powder) as well as very precise measurements (lengths, weights, environment, distance)

Round Count Book. This book lists the number of rounds that have been fired through a specific barrel as well as a reference to the load for those rounds. The load book provides the shooter with a means to track the life of a barrel. Once a barrel has exceeded its life, the barrel is less accurate and needs to be replaced.

Detailed Data Card (image below). This is a more detailed version of the scorecard. It includes called shot score values as well as clock values for both the actual and called shots. It also contains data related to the shooters rifle, ammunition, and match environment( barometric pressure, temperature, light direction, wind direction..)

plotsheet750x451

This API provides a means to reduce the redundancy for the shooter and the range master. It provides an infrastructure and data persistence that can be easily consumed by applications (both client and web based) using the GraphQL standard. By providing this API and supporting infrastructure, we are encouraging developers to create applications that can provide value to the shooting community and a source of income for themselves.

#Current Version (0.1.0)

The current version of this program does support collecting, updating, deleting, and fetching data by leveraging the GraphQL standards.  That data can update scorecards as well as all other related data sheets identified above. 

#Way to contribute

Reporting Bugs: Open up an issue through this git repository and select "bug" as the label
Recommending Enhancements: Open up an issue through this git repository and select "enhancement" as the label
Issues are reviewed monthly

#Architecture

The base technologies are node.js server, node.http module, GraphQL, express middleware, express-graphql, mongoose ODM and a mongo database. This architecture is currently deployed in a two tier environment(staging, production), leveraging the heroku platform.

Middleware:

The express router middleware provides the base routing capability.
A custom handle-errors module implements and extends the http-errors npm middleware package.
An auth middleware module leverages two npm modules (bcrypt, jsonwebtoken) and the node.crypto module to provide user sign-up and user sign-in functionality as well as session authentication/authorization.
The mongoose npm module is used for interaction with the mongo database
architecture5

View: Individual resources (user, match......) have dedicated router files located in the route folder. In addition to providing an interface to the complimentary controller files, these files also parse the json content in the incoming request (where applicable) and create and populate a req.body property using the npm package parse-body. For details about the input and output of routes, see the Routes section below.

Controller: Individual resources (user, match, load...) have dedicated controller files. These files are the interface between the routers (view) and the model files and mongo database(model). The controllers take in a request from a route and call the necessary functions to interact with the model. They then return a response to the route once a request has been processed in the model:

model: The controller files call the constructor methods in the "model" files to construct new resource objects in memory.
mongoose: The controller files leverage the required mongoose client module to create new schemas in the mongo database and to execute CRUD operations on mongo documents. Currently supported resources include:
user
competition
match
shot
rifle
barrel
load
Model: Individual resources (user, match...) have dedicated model files. These files provide the constructors and the mongoose schema creation syntax. For a detailed breakdown of models and the model properties, see the schema section below.

#Schema ###MVP Schema Diagram

###Currently Deployed Schema Diagram 

#Description  

#Installation  

#Usage  

#Contributing  

#Credits  

#License  
