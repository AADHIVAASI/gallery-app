# Gallery App in React

Search photos that are served by Unsplash API

## Description

* Displays random list of photos from Unsplash at landing page(default 10 photos per request)
* User can search or filter photos by category

## Screenshots
* **Landing page**
![App Screenshot](https://user-images.githubusercontent.com/20166532/163791362-e864832f-5bb4-4828-ab1c-92c961aa15c7.png)

* **Filter based on category**
![App Screenshot](https://user-images.githubusercontent.com/20166532/163791573-79b7936b-b4e8-40f3-83e0-3362f9d1dd89.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

```
npm
```

### Installing

A step by step series of examples that tell you how to get a development env running for this project

If you need a reference on how to install npm, you can go to:
* [How to Install Node and npm](http://treehouse.github.io/installation-guides/)

* Download the project files, [here is the link if you need it](https://github.com/AADHIVAASI/gallery-app)
* Add .env file inside the project root folder and insert
```
REACT_APP_CLIENT_ID=*your Unsplash API's client ID*
```
* Open your terminal/console and make sure to be inside the project folder.
* Then type in your terminal/console
```
npm install 
```
That will install all project's dependencies

* Start your server by typing:
```
npm start
```

* npm will open up a tab with the app running or simply go to your browser and type http://localhost:3000/

## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [Git](https://git-scm.com/) - Version Control System
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [styled-components](https://www.npmjs.com/package/styled-components/v/4.1.3) - Allows CSS syntax inside React components
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [BlurHash](https://blurha.sh/) - A compact representation of a placeholder for an image.
* [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Infinite scrolling functionality
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Authors

* [**Vibheesha Velayudha**](https://github.com/AADHIVAASI)

## Acknowledgments

* [Loading Animation](https://loading.io/css/)
* [BlurHash-Loading](https://github.com/blakewood84/react-blurhash-loading)

## Checklist:
- [x]  Display the photos loaded from the API in a grid containing 3 images in a row
- [x]  Search functionality
- [x]  Filter functionality on category
- N/A- Pagination
- [x]  Responsiveness
- [x]  Infinite/Continuous Scroll
- [x]  Use React
- [x]  Write the code using ES6
- [x]  Make sure you code is well formatted and clean
- [x]  Separate concerns
- []  Tests
- [x]  Write functional code
- [x]  Use a module loader/bundler
- [x]  Documentation
