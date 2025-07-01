# Atum Wiki Repo

Wikis here are built with [Docusaurus](https://docusaurus.io)

## Creating a new Wiki

to create a new Docusaurus wiki run the following command: 

```npm create-docusaurus@latest [WIKI_NAME] classic --typescript```

--typescript will create it as typescript project in the case we use react components

New projects are created with a docusaurus tutorial so you can delete everything under pages, docs and components but keep the directories
In the docusaurus.config.ts set the following: 

```
{
  ...
  url: 'https://atum.bio',
  baseUrl: '/myatum/guides/[WIKI_NAME]',
  ...
}
```

I advise doing [this as well](https://stackoverflow.com/questions/61999271/how-to-set-docs-as-the-main-page)

## Wikis

### [Gene Designer Wiki](/gene-designer-wiki/README.md)

To start run:

```npm run start-gd-wiki```
It will be hosted at http://localhost:3000/myatum/guides/genedesigners

To add doc pages: 
1. Check if the folder already exists for the parent of the page you want to add.
2. If so, in that folder add a .mdx file with name of your page
3. Else, add a folder with name of the section:
    - Add a \_category\_.json file
    - Add a .mdx file with the name of you page to the folder

