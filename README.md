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
        - Expo - An an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
        - Typescript - Types are useful for not writing bugs. If you think you like writing JavaScript without types in VSCode, yuo are still taking advamtage of infered types since the LSP is really built for typecript and not JavaScript. Don't go and learn Typscript, learn JavaScript, then the 3ish core additions you'll use in TS.
        - Tailwindscss - Still not certain if this should be included so please test it. It is super cool being able to style style your JSX components this way.
        - TODO:
            - ESLint - A static code analysis tool for identifying problematic patterns found in JavaScript code. ules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.
            - Prettier - An opinionated code formatter; Supports many languages; Integrates with most editors.
    - Setup:
        - `$ npx create-expo-app ARPFMarp -t expo-template-blank-typescript`
        - `$ cd ARPFMarp`
        - `$ yarn add nativewind`
        - `$ yarn add --dev tailwindcss`
        - `$ npx tailwindcss init`
    - Start:
        - `$ yarn start`
        - At this point select android or ios depending on which you can emulate/simulate. There is good documentation, but if you are on linux or MacOS expect to have to do some manual config.

### Team Management

- Shared Configuration Standard
    - [editorconfig/editorconfig](https://github.com/editorconfig/editorconfig)
        - Universal editor configuration for uniform editor settings for things like spaces, character sets, indention style, and more

### Node Based Web Stack
