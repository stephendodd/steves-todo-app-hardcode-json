#Steves Todo App Readme

URL: https://github.com/stephendodd/steves-todo-app-hardcode-json
Repo: https://github.com/stephendodd/steves-todo-app-hardcode-json.git

This is the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html).

## To use

Pull the git repo from the "Repo" link above

Run the command ```./node_modules/.bin/webpack``` to use webpack to generate the bundle.js File

Start the ruby server by running the command ```ruby server.rb```. This will create a local server run on port 3000 unless otherwise specified.

Navigate to ```http://localhost:3000``` to see the todo app in action.

##Running the server

```sh
ruby server.rb
```

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 ruby server.rb
```
