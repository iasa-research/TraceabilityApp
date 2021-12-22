# TraceabilityApp

## Preparations
1. Fill in your Jira and Neo4j credentials in [config.js](config.js) 

2. Check the [proxy.conf.json](traceapp-UI/proxy.conf.json) to ensure you have the correct proxy settings. The /api route should point to your backend server and the /updateproject route should point to your JavaToGraph-Tracebility component rest api 

3. Make sure the global database iasa-global is running (the app does not use the database directly but if you call the JavaToGraph-Traceability component to update the project data (Git Import button, upper right), it needs iasa-global)

**IMPORTANT:** An instance of the JavaToGraph-Traceability app as well as the iasa-global database are running on the IASA server! Please ask the iasa research team members for usage instructions, if you don't want to deploy these to services by yourself! To reach them, you need to be in the vpn network. 

## Running the app without the updateProject functionality 
If your neo4j database is already filled, you can also use the app without the JavaToGraph-Traceability app and without the global database iasa-global running. However, you may be analysing an old state of the architecture then, if new commits and pushs were made after the project data was loaded in the neo4j database. 

## Start App
Install the node modules with ``npm install``, then start the app with ``npm start`` in the ``TraceabilityApp`` directory (*not* in the ``traceapp-UI`` directory!). In the background, the [frontend](traceapp-UI) is build using npm install and ng build and both frontend and backend are served via the express server. 

* If not configured otherwise, your frontend is running on port ``3020`` 
* If not configured otherwise, your backend is running on port ``3010``

## Git Import
Update your project by entering the project id like it is set in the iasa-global database for your project on the upper right and click the Git Import Button. Make sure, your JavaToGraph-Traceability component is up and running (or you use the one on the iasa server) and you configured the connection like described in Preparations. 

## Run angular app on seperate web server
* if you don't want to serve both frontend and backend via the express server, comment out the code section under the //Frontend comment 
* re run the backend with npm start (The frontend is rebuild during that process with ``ng build`` but is *not* served then)
* navigate to traceapp-UI 
* execute ``ng serve --proxy-config proxy.conf.json`` or ``npm start``

## Contribute to project
* the iasa research team can add you as a developer to the project
* make sure you do not push the config.json with actual credentials to Github 