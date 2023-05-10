### reqs

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## run a dev server

```bash
npm run start
```

the `npm run start` command builds the website locally and serves it through a development server, ready to view at http://localhost:3000/.

the site **reloads automatically** and displays changes.

### deployment

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

if you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.