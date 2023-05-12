#!/bin/bash

cp -rf ../tis-legacy .

docker-compose up --build --remove-orphans -d proxy