# ARPF Map Companion

<img width="97" alt="ARPF" src="https://user-images.githubusercontent.com/47950270/236599808-ab46ce50-ef80-4d7e-ba1e-a92d97f6ee00.png">

## Table of Contents

- [The Goal](#the-goal)
- [About Project](#about-project)
- [Environment Setup](#environment-setup)
- [Contributors](#contributors)
- [Resources](#resources)

## The Goal

Create a mobile application for the American River Parkway Foundation
that provides users with a user-friendly and convenient way to access information about the
Foundation and the American River Parkway. The mobile app will include a map feature,
allowing users to easily locate and explore different areas of the parkway. The app will provide
users with a wealth of information about the parkway, including trails, natural features, historical
landmarks, and events. By creating a mobile app, the American River Parkway Foundation
hopes to increase awareness and engagement among users, leading to increased support and
preservation of this important natural resource.

## About Project

### In action



### Tech Stack

- Frontend
    - Languages: TailwindCSS, Typescript, and React Native JSX
    - SKDs: Expo, with Xcode or Android Studio for emulation 
- Backend
    - Server: Express JS
- Database 
    - Postgresql provided thorugh Supabase
- API’s 
    - Google Dynamic Maps

## Environment Setup

Requirements:

- Node.js
    - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    - https://nodejs.org/en/download/
- Yarn
    - This is basically a dorp in replacement for the `npm` command
    - https://classic.yarnpkg.com/lang/en/docs/install
- Android emulator via Android Studio or iOS simulator from Xcode
    - https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio#0
    - https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators
    - This seems like a decent video (just watch what partains to your needs) https://youtu.be/0-S5a0eXPoc

VSCode plugins you'll probably want:

- https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo

Useful tools:

- [act](https://github.com/nektos/act) - Run your GitHub Actions locally


### Download and Initialization

1. Clone the codebase from the repo

```bash
git clone https://github.com/AndOrangutan/csc190-beam-team
```

2. Add in `.env` environmental variable file to the root file directory, providing API Keys, IP, and Port.

```bash
code .env   # Create .env file and open it in vscode.
```

3. Initialize the project, this installs the required libraries and builds the project (basically `yarn install` and `yarn run build` for both server and 
client)
    - Windows
        ```bash
        ./init.bat
        ```

    - Linux or MacOS
        ```bash
        ./init.sh
        ```

4. Run the server from a terminal:

```bash
cd server
yarn run start
```

If you have made changes to the server, you will have to rebuild first running the following in the server directory:

```bash
yarn run build
```

5. Open another terminal to the ROOT of the project and run the client:

```bash
yarn run start
```

6. From here you should be prompted to open the app in an iOS Sim or Android Emulator.


### Testing

Running test for the client can simply be done by calling:

```bash
yarn test
```

To run the server's, first change into the server directory.

```bash
cd server
yarn test
```


## Contributors

- Jesus Cervantes (jcervantes6@csus.edu)
- Joseph Bayless (Jbayless@csus.edu)
- Mark Burgasser (mburgasser@csus.edu)
- Sahd Kahn (sahdkhan@csus.edu)
- Sharon Deng (ydeng@csus.edu)
- Ted Kim (tkim@csus.edu)
- Von Mueller (vmueller@csus.edu)
- Zhenhua Zhang (zhenhuazhang@csus.edu)

## Resources

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
- DB
    - [Building a CRUD App with Supabase and Express](https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910)
    - [Pino: used instead of morgan](https://github.com/pinojs/pino)
    - [Build a User Management App with Expo](https://supabase.com/docs/guides/getting-started/tutorials/with-expo)


