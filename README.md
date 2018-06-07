Example App using External Components and Pagedraw
========

# Dependencies

````
# Install the Pagedraw CLI
npm install -g pagedraw-cli

# Login with your Pagedraw credentials
pagedraw login
```

# Usage

To continuously sync Pagedraw generated code into `src/pagedraw` do
````
pagedraw sync
```

And to run your app do
```
npm start
```

# Importing external components into Pagedraw

See `src/pagedraw-imports.js`. All components listed there get imported into Pagedraw when you hit the "Sync external
code" button in the Pagedraw editor.
