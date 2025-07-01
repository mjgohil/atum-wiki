# Gene Designer Wiki

To start:

on the root directory (Atum-Wiki):
```npm run start-gd-wiki```
From this directory run: 
```npm run start```

To add doc pages: 
1. Check if the folder already exists for the parent of the page you want to add.
2. If so, in that folder add a .mdx file with name of your page
3. Else, add a folder with name of the section:
    - Add a \_category\_.json file
    - Add a .mdx file with the name of you page to the folder


## Docusaurus Generated Below

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
