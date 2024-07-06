## Running a development server

The `npm run start` command builds the website locally and serves it through a development server, ready to view at http://localhost:3000/.

The site reloads ***automatically*** and displays changes without the need of a browser refresh.

## Deployment

Push all changes to master branch first, then:

```
cmd /C 'set "GIT_USER=<USERNAME>" && npm run deploy'
```

This builds the site and pushes the product to the `gh-pages` branch