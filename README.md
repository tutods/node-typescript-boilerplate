<p style="text-align: center">
	<a href="#">
		<img src="https://i.ibb.co/FVw9wS8/dsousa-logo.png" alt="Daniel Sousa @TutoDS" width="200px">
	</a>
</p>

<h1 style="text-align: center; padding: 0;">
	NodeJS + TypeScript + Express + Mongoose

</h1>
<h2 style="text-align: center; font-weight: 300">
	Boilerplate
</h2>

<p align="center">
	<a href="#"><img src="https://img.shields.io/badge/Status-In%20Progress-yellow" alt="status"></a>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" /></a>
  <a href="#"><img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge" alt="ExpressJS"/></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="#"><img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/></a>
</p>

> **Note:** Login is implemented, but the middleware to verify if user have session and router protection not finished yet

This repository contains my boilerplate to build an API Rest using **NodeJS**, **TypeScript**, **ExpressJS** and **Mongoose** (**MongoDB**).

I built this boilerplate after see some videos and try some times. When I finished all tries and solve some problems, I join all code in this repository to future projects.

This repository is public and I hope is useful to other people.

<h2 style="font-weight: 300">
	Folder Structure
</h2>

In this repository you can find folders shown below:

```D
.
└── src
    ├── configs
    ├── controllers
    ├── exceptions
    ├── middlewares
    ├── models
    │   └── interfaces
    └── routes
```

The folder **`src/configs`** contains all code related with configs, like **Mongoose** connection.bg-0

Beyond that folders, you can find **Babel** <small>(`babel.config.json`)</small> and **TypeScript** <small>(`tsconfig.json`)</small> configuration file, as also **ESLint** <small>(`.eslintrc` and `.eslintignore`)</small>, **Nodemoon** <small>(`nodemoon.json`)</small> and **Prettier** <small>(`.prettierrc`)</small> configuration files.

<h2 style="font-weight: 300">
	Notes
</h2>

> **About TypeScript:** in `tsconfig.json` you can see the configuration I use. I create custom paths to use in all `.ts` files, this way you not need use relative paths, for example, to `configs/` folder, I create `@configs` path, and to use: `import mongoose from '@configs/mongoose'`.
> For me, this is a good functionality in TypeScript and help you to create a clean imports.

<h3 style="font-weight: 300">Custom Paths - TypeScript</h3>

```json
"paths": {
	"@models/*": ["./models/*"],
	"@controllers/*": ["./controllers/*"],
	"@views/*": ["./views/*"],
	"@configs/*": ["./configs/*"],
	"@middlewares/*": ["./middlewares/*"],
	"@exceptions/*": ["./exceptions/*"],
	"@routes/*": ["./routes/*"],
	"@index-routes": ["./routes"]
},
```
