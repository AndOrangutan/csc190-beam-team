# csc190-beam-team

Team Beam Team's final project.

## Info

Hello Beam Team, **we are going to need a stack.** Place personal recommendations here. All proposals will get equal consideration, though this is more of a list of tools we could be using due to us likely have to adhere to customers spec.

- Environment Setup:
    - Install Node.js
        - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
        - https://nodejs.org/en/download/
    - Install Yarn
        - This is basically a dorp in replacement for the `npm` command
        - https://classic.yarnpkg.com/lang/en/docs/install
    - Get your android emulator or ios simulator setup
        - This seems like a decent video (just watch what partains to your needs) https://youtu.be/0-S5a0eXPoc
    - VSCode plugins you'll probably want
        - https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
        - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
        - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
        - https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo
- You can clone it just as you would any project, I like bare repos with worktrees, but a standard repo will work.
    - `git clone --bare https://github.com/AndOrangutan/csc190-beam-team csc190-beam-team`
    - `git worktree add main`
    - `cd main`
    - Another branch
    - `cd ..` go to parent bare dir
    - `git worketree add <branch-name>`
    - `cd <branch-name>`

- Resources
    - Git
        - **git** - https://git-scm.com/docs/gittutorial
        - **Worktrees** - https://git-scm.com/docs/git-worktree
        - **Commits (Really good, should definitely read)** - https://cbea.ms/git-commit/
    - Stack Docs
        - [React Native](https://reactnative.dev/docs/components-and-apis)
        - [Expo (Extra React Native stuffs)](https://docs.expo.dev/)
        - [Typescript(Javascript Super Set)](https://www.typescriptlang.org/docs/)
        - [TailwindCSS(Styling Library)](https://tailwindcss.com/docs/installation)
        - [Hex color to TailwindCSS color](https://tailwind-color-finder.vercel.app/)

- Example:
![Peek 2023-02-26 15-34](https://user-images.githubusercontent.com/40435989/221444565-20127409-03ba-4f01-b948-2839e321e61d.gif)

### Team Management

- Shared Configuration Standard
    - [editorconfig/editorconfig](https://github.com/editorconfig/editorconfig)
        - Universal editor configuration for uniform editor settings for things like spaces, character sets, indention style, and more

