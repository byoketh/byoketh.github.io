### reqs

- [Node.js](https://nodejs.org/en/download/) v18.12.1
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [Docusaurus](https://docusaurus.io/) v2.4.0

## run a dev server

```
npm run start
```

the `npm run start` command builds the website locally and serves it through a development server, ready to view at http://localhost:3000/.

the site **reloads automatically** and displays changes.

### deployment

push all changes to master branch first, then:

```
cmd /C 'set "GIT_USER=<USERNAME>" && npm run deploy'
```

this build the site to the `gh-pages` branch