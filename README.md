#seneca-template-store

Creating a new seneca datastore plug-in from scratch can involve a lot of tedium and overhead.The purpose of this project is to provide a template which can be easily modified to create your own datastore plug-in project with minimal effort.

###Set-up

 ``` *.bash
 git clone https://github.com/jrochenrfm/seneca-template-store.git
 ```

 Now re-name the seneca-template-store folder using the datastore plug-in convention. All seneca datastore plug-ins are named seneca-<databasename>-store, so seneca-mongo-store for MongoDB, seneca-mysql-store for MySQL, etc.

 Re-name `lib/data-store.js` to `lib/<databasename>-store.js`

 Re-name `test/data-store.test.js` to `lib/<databasename>-store.test.js`

###package.json

Fill in the package.json file with your project information:

- name
- version
- description
- main


The main attribute is required so that the test framework will run.

###Install the test framework and seneca

The devDependencies attribute and peerDependencies attributes are already completed so you can just run:

 ``` *.bash
 npm install
 ```

 ###Run tests

 ``` *.bash
 npm test
 ```

 The tests will fail but you are ready to start implementing you datastore plug-in.