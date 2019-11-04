# Shazamazon Proxy and Navigation Functionality

### About

<a href="https://github.com/shazamazon/module-nav-search-bar">Shazamazon Navigation Bar</a> is a full stack, responsive, e-commerce navigation service delivered as a microservice, inspired by Amazon.

It was built as part of a <a href="https://github.com/shazamazon">e-commerce product page MVP</a> but can be used as a stand-alone navingation tool or combined with other services/components to create a full e-commerce site.

In addition to the navigation and search bar, I also developed this proxy to bring all the distributed microservices together, whose developers you can see below.

### Video Demo

Part 1
![demo part 1](shazamazon-part1.gif)

Part 2
![demo part 2](shazamazon-part2.gif)

### Contributors

Cart service and proxy developed by <a href="https://github.com/jkcryptolock">jkcryptolock</a>, other components to the full e-commerce site devloped by:

<a href="https://github.com/jkcryptolock">jkcryptolock</a> - Cart and Footer

<a href='https://github.com/JeffSalinas'>JeffSalinas</a> - Carousel

<a href='https://github.com/Jibbscript'>Jibbscript</a> - Q&A

<a href='https://github.com/jxkim'>jxkim</a> - Product Images

<a href='https://github.com/ArohanD'>ArohanD</a> - Product Ratings

<a href='https://github.com/wiggitywhitney'>wiggitywhitney</a> - Product Description

### Tech Stack

_Shazamazon Navigation Service_ was built primarily with ReactJS on the front end, Node/Express on the backend, and MongoDB for the database. The entire service was also styled after Amazon's official styling using entirely vanilla CSS.

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>

### Technical Challenges / Research

Some unexpected issues I ran into while building this app:

1. Utilizing Regular Expressions to create a partial string matching fuzzy search from scratch.

2. Deciding whether to use a broadcast channel, or custom event dispatch and listeners to get microservices to communicate.

3. Matching exact Amazon styling without using a CSS framework.

4. Reconciling different CSS configurations for each component, to get them to all display correctly via the proxy server.

#### User Stories

- As a User, I should be able to search for any product.
- As a User, I should be able to refine my search by selecting a relavant category
- As a User, I should be able to add the item to my cart, and have it communicated to the NavBar.

### Minimum Viable Product (MVP)

The MVP of the app allows users to search between different products, refining by category and keyword.

### How the App Works

Behind the scenes, the app takes in products, prices, and sellers, stores them in Mongo, and creates a query based upon the current product id.

When imported as a script to a page and given a div with an ID of 'nav-app', _Shazamazon Navigation Bar_ renders a complete top nav section to the page via React.

It also communicates to the other microservices by sending the currently selected product ID when an item is selected, which updates the other services to displaay the current product.

The proxy imports the javascript and css files for each microservice from their respective EC2 servers, and inserts them into a single HTML page based upon their React div ids. Custom Events are created and dispatched to individual event listeners in each component to update the product for each component.
