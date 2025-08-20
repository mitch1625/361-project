
# E-Commerce Full-Stack Website
This is a full-stack project that uses microservice architecture to build an e-commerce website that sells coffee. Microservices include: a currency converter, user authentication service, product service and cart service.
## How It's Made:

**Tech Used:** React, CSS, PostgreSQL, FastAPI, SQLAlchemy

React was used to build the main program/interface that the user interacts with. Styling was done in CSS.

A microservice architecture was used to design the back-end. Of the four microservices implemented, the user, product and cart services all connected to a PostgreSQL database. The three microservices use SQLAlchemy to communicate with their own respective database and FastAPI was used to build RESTful APIs to allow the main program to communicate with each microservice.

## Lessons Learned

The biggest challenge I had with this project was figuring out how to get my microservices to communicate with each other through the main program. If a user wanted to add/remove products to their cart, they had to be logged into their account. The problem I had was figuring out how to verify a user a logged in, accessing the user's own cart, and adding/removing products to that user's cart while maintaining data consistency between microservices and preserving the microservice architecture.

Through research I found that using a JSON Web Token (JWT) was the best method for achieving this. When a user successfully logged in/registered an account, a JWT was created with the encrypted key and the user's email. Then, when a user went to change or view their cart, the cart microservice checked for a JWT on the front-end and if present, decoded it to retrieve the user's email and used the email to query the cart microservice for that user's cart.

## Authors

- Eric Mitchell [@mitch1625](https://www.github.com/mitch1625)

