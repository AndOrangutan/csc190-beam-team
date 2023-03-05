# csc190-beam-team

Team Beam Team's final project.

## Todo

- Install instructions
    - `git clone --bare https://github.com/AndOrangutan/csc190-beam-team csc190-beam-team`
    - `git worktree add main`
    - `cd main`

### Sprint 00

<!-- This is just here in case your editor has a way to list local todos, this list is easily jumpable -->
<!-- TODO: List of todo items in the README.md-->

- Setup wiki for development log.
    - This is probably the best route unless you would like to statically generate our own website with some tool like [srid/emanote](https://github.com/srid/emanote) or its predecessor [srid/neuron] (which I only recommend due to experiences, !!!suggestions welcome!!!)
    - You can write it all in markdown.

## Stack proposal

Hello Beam Team, **we are going to need a stack.** Place personal recommendations here. All proposals will get equal consideration, though this is more of a list of tools we could be using due to us likely have to adhere to customers spec.

- **Using Expo to build a React Native app with Typscript and TailwindsCSS**
- This stack is still in its early stages and can ve expeected to grow as we learn more about the project.
    - The Stack
        - **Expo** - An an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
        - **Typescript** - Types are useful for not writing bugs. If you think you like writing JavaScript without types in VSCode, yuo are still taking advamtage of infered types since the LSP is really built for typecript and not JavaScript. Don't go and learn Typscript, learn JavaScript, then the 3ish core additions you'll use in TS.
        - **Tailwindscss** - Still not certain if this should be included so please test it. It is super cool being able to style style your JSX components this way.
        - **ESLint** - A static code analysis tool for identifying problematic patterns found in JavaScript code. ules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.
        - **Prettier** - An opinionated code formatter; Supports many languages; Integrates with most editors.
    - Project Setup (how I setup the project, you don't need to do this)
        - `$ npx create-expo-app skeleton-project -t expo-template-blank-typescript`
        - `$ mv skeleton-project/* ./`
        - `$ yarn add nativewind`
        - `$ yarn add --dev tailwindcss`
        - `$ npx tailwindcss init`
        - Do modifications in following links
            - [Nativewind and expo](https://www.nativewind.dev/quick-starts/expo)
            - [Nativewind and typescript](https://www.nativewind.dev/getting-started/typescript)
        - `$ yarn add --dev eslint-config-universe`
        - `$ yarn add --dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser`
    - Environment Setup:
        - Install Node.js
            - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
            - https://nodejs.org/en/download/
        - Install Yarn
            - https://classic.yarnpkg.com/lang/en/docs/install
        - Get your android emulator or ios simulator setup
            - This seems like a decent video (just watch what partains to your needs) https://youtu.be/0-S5a0eXPoc
        - VSCode plugins you'll probably want
            - https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
            - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
            - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
            - https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo
    - Git Setup:
        - Resources
            - **git** - https://git-scm.com/docs/gittutorial
            - **Worktrees** - https://git-scm.com/docs/git-worktree
            - **Commits** - https://cbea.ms/git-commit/
        - Cloneing the Repo
            - While this probably isn't wany you are used to, I would recommend using a Git Worktree. This allows you to have multiple branches checked out without having the need to commit before changing branches. What follows is an example of why you might want to use this setup, though you can just clone it normally.
            - ![image](https://user-images.githubusercontent.com/40435989/222939155-6c71e099-1cf3-446d-bacb-7e3c99911525.png)

            - `git clone --bare https://github.com/AndOrangutan/csc190-beam-team csc190-beam-team`
            - `cd csc190-beam-team`
            - Here you can see that this repo is a bit different. This `bare` repo contains all the git stuffs that would normally be hidden away in your `.git/`. You don't have to worry about or understand anything in this directory though.
            - ![image](https://user-images.githubusercontent.com/40435989/222939418-a8957184-47d0-4794-bb60-9e92221e937c.png)
            - To get started with our worktrees and get access to our `main` branch, lets run the following command.
            - `git worktree add main`
            - I will also add (think of this as checking out) `BT-56-skeleton-project`
            - `git worktree add BT-56-skeleton-project`
            - ![image](https://user-images.githubusercontent.com/40435989/222939600-d6041149-d0c6-4da7-a26d-f2f26e9fcb94.png)
            - In the above, you can now see I have access to both the current `main` branch and the `BT-56...` one. All I have to do to change between these different branches is actually just changing the directory (like `cd ../main` to change to main branch from any other branch). You now don't have to change branches.
            - If I wanted to start a new branch, all I would have to do is `git worktree add <branch name here>`.
            - This is way more efficient when you have to use multiple branches.
    - Start:
        - `$ yarn start`
        - At this point select android or ios depending on which you can emulate/simulate. There is good documentation, but if you are on linux or MacOS expect to have to do some manual config.
    - Example:
    ![Peek 2023-02-26 15-34](https://user-images.githubusercontent.com/40435989/221444565-20127409-03ba-4f01-b948-2839e321e61d.gif)

### Team Management

- Shared Configuration Standard
    - [editorconfig/editorconfig](https://github.com/editorconfig/editorconfig)
        - Universal editor configuration for uniform editor settings for things like spaces, character sets, indention style, and more

