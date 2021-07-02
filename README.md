# Backend Node.js

## This repository
> In this course we learned how to make an API with Node.js, to serve static files, give them security and more.

## Introduction
#### What is Node.js?
> Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

#### What is nodemon?
> nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.

## Contents
> - HTTP
> - MongoDB
>   * Create
>   * Read
>   * Update
>   * Delete
> - Static Files
> - DB relational and non-relational
> - `Websockets`: It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party.

## MongoDB Atlas
> 1- Create mongo database: I used the [mongodb altas](https://www.mongodb.com/cloud/atlas) platform for creating and managing one.Later you will need to create a user/password in order to connect the server with the DB.
> 
> 2- Create `.env` in the root path `/` file and your variables

```
DB_NAME=core-xyz.gcp.mongodb.net
DB_USER=db_user_value
DB_PASSWORD=db_password_value
```

> 3- Install node packages and then run

```
npm install
npm run dev:server
```


## Dependencies
> - Install [VS Code](https://code.visualstudio.com/download)
> - Install [Node.js](https://nodejs.org/en/)
> - Install nodemon (Optional)
>   * Cloning with git or by using npm (the recommended way):
> ```
> npm install -g nodemon
> ```
>   * You can also install nodemon as a development dependency:
>   ```
>   npm install --save-dev nodemon
>   ```

## Run Code
> - Use `npm i` to install the project dependencies
> - For Windows use the command `cd [path]` and `npx nodemon [script]` to run the project automatically

## Technologies
> - JavaScript
> - CSS
> - HTML

_Created by Nara Peña Gámez._
