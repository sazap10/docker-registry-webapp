# Docker Registry Webapp

## Overview
A frontend for a private docker registry(v2).

## Requires
* ES6

## Technologies
* Express
* Knockout

## Usage
### Docker
#### Docker run
```
docker run --name docker-registry-webapp -p 80:3000 -d sazap10/docker-registry-webapp:[version]
```

#### docker-compose
```
docker-registry-webapp:
  container_name: docker-registry-webapp
  image: sazap10/docker-registry-webapp:[version]
  restart: always
  ports:
   - "80:3000"
```
