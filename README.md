# Setup

## Environemnt setup
Prior to run this code, matach your development environment to following.
    * node version 8.9.4
    * npm version 5.6.0
    * Angular CLI version 1.5.3

### Install following after installing NodeJS
* Install Typescript

    ```shell
    npm install -g typescript@2.4.2
    ```
* Install angular cli
    
    ```shell
    npm uninstall -g @angular/cli
    npm uninstall -g angular-cli
    #if npm < 5
    npm cache clean 
    #else
    npm cache verify
    npm install -g @angular/cli@1.5.3
    ```
     

## How to run the code

### When you develop Agnular/Material components of this app
    ```shell
    cd <project root>
    ng serve
    ```

### When you are developing backend/node code
    ```shell
    npm start
    ```
### Run the application in production
    ```shell
    npm build
    npm start
    ```
