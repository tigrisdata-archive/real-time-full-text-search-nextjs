
<a name="readme-top"></a>

<p align="center">
  <a href="https://www.typescriptlang.org/"><img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/></a>
  <a href="https://vercel.com/"><img alt="Vercel" src="https://img.shields.io/badge/vercel-F22F46?style=for-the-badge&logo=vercel&logoColor=white"/></a>
  <a href="https://nextjs.org/"><img alt="Next.js" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/></a>
  <a href="https://opensource.org/licenses/MIT"><img alt="LICENSE" src="https://img.shields.io/badge/licence-MIT-orange?style=for-the-badge"></a></a>
</p>

<p align="center">  
Tigris offers an integrated full-text search solution that allows you to create powerful search experiences within your application. Utilizing Typesense technology, this embedded search engine eliminates the need for an additional search system, providing a smooth and scalable experience for your database.
</br></br>

# ⚡ ️Tigris sample app on Next.js - Real-time Search

This application is built with Next.js and Tigris and provides a full-stack solution. Products are stored and retrieved from a Tigris database to be displayed to customers. To improve accessibility, I integrated a real-time search feature with Tigris allowing users to quickly search for their desired products.

## Project Demo
<p align="center">
<img src="./public/realtime-preview.gif" width="64%"/>
</p>

## ⚙️ Deploying the app

To deploy this app to your [Vercel](https://vercel.com/signup) and [Netlify](https://app.netlify.com/signup) accounts, you will need a Github, Vercel, Netlify and Tigris account. Once you have all the accounts, simply click on the "Deploy" buttons and follow the instructions to deploy the app to your accounts.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/tigrisdata-community/realtime-search) 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tigrisdata-community/realtime-search)


## 📖 Running Next.js server & Tigris locally

### Prerequisites
   1. Sign up on the [Tigris console](https://console.preview.tigrisdata.cloud/)
   2. [Node.js](https://nodejs.org/) 14.6.0 or newer
   3. MacOS, Windows, and Linux are supported

### Instructions

1. Clone this repo on your computer
```shell
git clone https://github.com/tigrisdata-community/realtime-search
```
2. Install dependencies
```shell
cd realtime-search
npm install
```
3. Run the Next.js server
```shell
npm run dev
```
> Note: For the application to work, you must first create a project on the [Tigris console](https://console.preview.tigrisdata.cloud/) and then copy the generated credentials to the `.env` file. For instructions on how to do this, please refer to the accompanying tutorial..

:tada: All done. You should be able to use app on `localhost:3000` in browser. Feel free to play 
around or do a [code walk-through](#code-walkthrough) next :tada:
</details>

## 👀 Code walkthrough

<details>
<summary> 📂 File structure</summary>

```text
├── package.json
├── lib
│   ├── tigris.ts
├── db
│   └── models
│       └── store.ts
└── pages
    ├── index.tsx
    └── api
        └── store
            ├── index.ts
            └── search.ts
```
</details>

<details>
<summary> 🪢 Tigris schema definition</summary>

[db/models/store.ts](db/models/store.ts) - The app has a single collection
`products` that stores the products in the store. This Collection gets automatically created/updated by the
[setup script](scripts/setup.ts). 
</details>

<details>
<summary> ❇️ API routes to access data in Tigris collection</summary>

All the Next.js API routes are defined under `pages/api/`. We have three files exposing endpoints: 

#### [`pages/api/store/index.ts`](pages/api/store/index.ts)

- `GET /api/store` to get an array of products as Array<Products>
- `GET /api/items/search?q=query` to find and return products matching the given query
</details>

# 🚀 Next steps

Feel free to add more functionalities or customize App for your use-case and learn more about 
[Tigris data platform](https://docs.tigrisdata.com/overview/) 

# 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. 
You can also simply open an issue. Don't forget to give the project a star! 
Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
