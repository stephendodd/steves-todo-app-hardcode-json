#Steves Todo App Readme

URL: https://github.com/stephendodd/steves-todo-app-hardcode-json
Repo: https://github.com/stephendodd/steves-todo-app-hardcode-json.git

This is a todoApp that is written in React JS with a Ruby back-end. It will grow in complexity over time.

## To use

###Pull the git repo from the "Repo" link above

###Install required dependencies

* React run ```npm install react```
* React Dom run ```npm install react-dom```
* Babel loader run ```npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev```
* Webpack run ```npm install webpack```

### Generate node modules folder with webpack

In the pulled git directory run the command ```./node_modules/.bin/webpack``` to use webpack to generate the bundle.js File.

### Start the ruby server

Start the ruby server by running the command ```ruby server.rb```. This will create a local server run on port 3000 unless otherwise specified.

### Open up the app in the browser

Navigate to ```http://localhost:3000``` to see the todo app in action.

Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 ruby server.rb
```

## Funtionality

Below is a list of the Todo App's functions.

* Add todo items
* Remove todo items
* View completed todo items
