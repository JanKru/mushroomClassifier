
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)


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
4. Create a .env-file (like the example below)
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
TIMEOUT=1000

THRESHOLDTOBEPOISONOUS=85
```
5. Install NPM packages
```sh
npm install
```
6. Navigate to the frontend diretory

```sh
cd ../mushroomClassifier/frontend
```
8. Install NPM packages
```sh
npm install
```
## Usage

Start the server (node index.js) and frontend (ng serve --open) 
Be sure mongoDB is running

When your work on Mac your linter may marks the linebreaks. Go to .eslintrc and change linebreak style to unix

```sh
 "linebreak-style": ["error", "unix"]
 ```