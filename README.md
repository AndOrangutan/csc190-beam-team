# ARPF Map Companion

<img width="97" alt="ARPF" src="https://user-images.githubusercontent.com/47950270/236599808-ab46ce50-ef80-4d7e-ba1e-a92d97f6ee00.png">

## The Goal
Create a mobile application for the American River Parkway Foundation
that provides users with a user-friendly and convenient way to access information about the
Foundation and the American River Parkway. The mobile app will include a map feature,
allowing users to easily locate and explore different areas of the parkway. The app will provide
users with a wealth of information about the parkway, including trails, natural features, historical
landmarks, and events. By creating a mobile app, the American River Parkway Foundation
hopes to increase awareness and engagement among users, leading to increased support and
preservation of this important natural resource.

## Tech Stack
- Frontend
    - Languages: TailwindCSS, Typescript, and React Native JSX
    - SKDs: Expo, with Xcode or Android Studio for emulation 
- Backend
- Database 
    - MySQL 
- API’s 
    - Google Dynamic Maps

## Status
Project is currently under devlopment. Some front end framework is done. Currently does not have any backend or the map functionality. 

<img width="418" alt="Screen Shot 2023-05-05 at 9 34 16 PM" src="https://user-images.githubusercontent.com/47950270/236599976-316fc8c9-5890-41b5-9c22-1ad16c17a239.png">

<img width="406" alt="Screen Shot 2023-05-05 at 9 44 18 PM" src="https://user-images.githubusercontent.com/47950270/236600328-69fd23e5-2ff5-4e32-8a0f-ca45fac13840.png">



### Testing


### Environment Setup

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
    - `git worketree add ../<branch-name>`
    - `cd ../<branch-name>`

### Resources

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
    - [Icons](https://oblador.github.io/react-native-vector-icons/)
