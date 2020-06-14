# REST API WITH Node and MONGOOSE.
Simple crud in mongoose node using mongoose-paginate

## Running project

## Manual

You need to have [Node.js](https://nodejs.org), [MongoDB](https://www.mongodb.com) and [Docker](https://docs.docker.com) installed.

### MongoDB setup on Windows with Docker

```sh
# MongoDB with Docker
docker pull mongo
docker run --name mongodb -p 27017:27017 -d mongo
docker start mongodb

# You can use the ROBO3T software to consult the information 

```

```sh
# Install npm dependencies in project folder
npm install
```

### Run server

```sh
npm start
# running on port 3001
```

## Available methods

```sh
# List all products
# GET
http://localhost:3001/api/products

# List product with (id)
# GET
http://localhost:3001/api/product/id

# Create new product with
# POST {title, description, url}
http://localhost:3001/api/product

# Update a product with (id)
# PUT {title, description, url}
http://localhost:3001/api/product/id

# Delete a product with (id)
# DELETE 
http://localhost:3001/api/product/id
```

## Author

Created by Renaldo Viola ([@Renaldo](https://www.linkedin.com/in/renaldo-viola)).
