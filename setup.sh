#!/bin/bash

git fetch origin main

git reset --hard FETCH_HEAD

sudo chmod -R 777 proxy

sudo chmod -R 777 docker

docker-compose up -d --build frontend

docker-compose up -d --build english

docker-compose restart proxy

docker image prune -f

docker builder prune -f