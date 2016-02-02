# Docker Registry Webapp

## Overview
A frontend for a private docker registry(v2).

## Technologies
* Express

## Usage
### Docker
#### Docker run
```
docker run --name docker-registry-webapp -p 80:3000 -d -e PORT=3000 sazap10/docker-registry-webapp:[version]
```

#### Example docker-compose
```
docker-registry-webapp:
  container_name: docker-registry-webapp
  image: sazap10/docker-registry-webapp:[version]
  restart: always
  environment:
    PORT: 3000
```
