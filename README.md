
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [toDo](#ToDo)

## About The Project

Solution for the mushroom-challenge

## Getting Started

Get the code running.

### Prerequisites

You need the following software

* nodejs & npm [download](https://www.nodejs.org)
* mongoDB [download](https://www.mongodb.com/download-center/community)
* angular 

```sh
npm install angular -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/JanKru/mushroomClassifier.git
```
2. Navigate to mushroomClassifier/backend
```sh
cd ./mushroomClassifier/backend
```
3. Create a .env-file (like the example below)
```JS
NODE_ENV=development
SERVER_PORT=4041
MONGO_HOST=mongodb://localhost/mushroomClassifier

JWT_SECRET=SECRET#1234
JWT_EXP=20m

HIDDEN_LAYERS=[200]
ITERATIONS=20000
ERRORTHRESH=0.005
LEARNING_RATE=0.3
TIMEOUT=120000

THRESHOLDTOBEPOISONOUS=85
```
4. Install NPM packages
```sh
npm install
```

5. If you want to run backend: unit test
```sh
npm test
```

6. Navigate to the frontend diretory

```sh
cd ../mushroomClassifier/frontend
```
7. Install NPM packages
```sh
npm install
```

8. Start the frontend
```sh
ng serve --open
```

9. Start the backend (backend dir)
```sh
node index.js
```
10. Open Webpage and register a new user
## Usage

Start the server (node index.js) and frontend (ng serve --open) 
Be sure mongoDB is running

When your work on Mac your linter may marks the linebreaks. Go to .eslintrc and change linebreak style to unix

```sh
 "linebreak-style": ["error", "unix"]
 ```
 
## ToDo
* solve the responsive problem in modal 
* Capsules the individual modules correctly
* Write more tests, especially for the neural network. Possibly train with a smaller amount of data first and then test it
 
