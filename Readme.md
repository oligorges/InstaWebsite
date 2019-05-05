# InstaPortfolio

## Introduction
InstaPortfolio offers you an easy solution to create a Photoportfolio based on your images from Instagram.
It offers your the possibility to present your favorite pictures on your own Website and add also some functionality like ordering your Pictures after topics.  

This is a project for the course Server-side Scripting Frameworks at Metropolia University (FI)

An example how the Website could look like can be found [here](ttps://env-5665516.jelastic.metropolia.fi)

---

## Installation

### Modify the Configuration File

Before you start deploying the project on your own Plattform you have to change or add some informations like the Usercredentials for the MongoDB at the `config.js` 


### Setup the InstagramAPI

To use the data from the Instagram API you had to setup a project under the following link:
https://www.instagram.com/developer/

The Project needs the following settings:
- Permissions `basic` and `public_content`
- Securety `https://yoururl.abc/insta/auth/callback`
- Securety `Disable implicit OAuth: true`

Afterwards you have to add your `ClientID` and `ClientSecret` to the `config.js` file or set them as environment varibales `IGClientID` and `IGSecret` 


### Init project
```bash
    npm run init
```
This will install all the required nodemodules for both projects and fill the configuration database table with the default configurations.

### Develop UI

```bash
    npm run ui
```
This will run only the UI without any backend functionalities

### Develop Server

```bash
    npm run server
```
This will run the backend Server without rebuilding the ui or the apidocumentation

### Build Application

```bash
    npm run build
```
This will only rebuilding the ui and the apidocumentation without running the server

### Start Application

```bash
    npm start
```
This will rebuild the ui and apidocumentation and starts the server.

Default Credentials

> Username: admin

> Password: 1234

## Structure

The Project is splitted in two main folders, the `service` folder for the NodeJS Backend and the `vue-ui` folder for the VueJS Frondend.

```
InstaPortfolio
├── LICENSE
├── Readme.md
├── config.js
├── package.json
├── service
│   ├── apidoc.json
│   ├── certrequest.csr
│   ├── controllers
│   │   ├── adminArea.controller.js
│   │   ├── config.controller.js
│   │   ├── image.controller.js
│   │   ├── instagram.controller.js
│   │   └── topic.controller.js
│   ├── helper
│   │   └── initConfig.js
│   ├── middelware
│   │   ├── CRUD.js
│   │   ├── HashPw.js
│   │   └── Login.js
│   ├── models
│   │   ├── configModel.js
│   │   ├── imageModel.js
│   │   └── topicModel.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── logo.png
│   ├── routers
│   │   ├── adminArea.router.js
│   │   ├── config.router.js
│   │   ├── image.router.js
│   │   ├── instagram.router.js
│   │   └── topic.router.js
│   ├── server.js
│   ├── ssl-cert.pem
│   └── ssl-key.pem
└── vue-ui
    ├── README.md
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    └── src
        ├── App.vue
        ├── assets
        ├── components
        │   ├── configform.vue
        │   ├── footer.vue
        │   ├── groupform.vue
        │   ├── imagebox.vue
        │   ├── imageform.vue
        │   └── overlay.vue
        ├── layout
        │   ├── AdminArea.vue
        │   └── Main.vue
        ├── main.js
        ├── router.js
        └── views
            ├── AA
            │   ├── Config.vue
            │   ├── Group.vue
            │   └── Image.vue
            ├── Frontpage.vue
            ├── Groups.vue
            ├── Images.vue
            └── Login.vue`
```

## Authors

* **Oliver Gorges** -  [Dragonil](https://github.com/Dragonil)

See also the list of [contributors](https://github.com/Dragonil/InstaWebsite/graphs/contributors) who participated in this project.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE.md](LICENSE.md) file for details