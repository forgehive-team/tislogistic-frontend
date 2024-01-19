#!/bin/bash

git fetch origin v3

git reset --hard FETCH_HEAD

sudo chmod -R 777 proxy

sudo chmod -R 777 docker

docker-compose up -d --build frontend

docker-compose restart proxy

docker image prune -f

docker builder prune -f