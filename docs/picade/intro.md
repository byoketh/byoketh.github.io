---
sidebar_position: 1
---

# Picade Intro

An introduction to how the Picade works under the hood.

## Preface

It can get confusing to talk about the Picade since there is just so much software and hardware at work on the inside. Because of this, we will start out by going over the vocabulary to be used in the documentation.

- **Picade** is the entire system. The whole thing, chassis and all.
- **Raspberry Pi** is the motherboard, or main board, of the Picade. 
  - More specifically, a **Raspberry Pi 4 Model B Rev 1.1**
- The Operating System (OS) is **Raspbain GNU/Linux 10 (buster)**

If you're new to Linux systems, this next part may seem like a lot a first, but i promise it's not too bad once we get through it.



### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
