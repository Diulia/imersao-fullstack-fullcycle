#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env. .env
fi

npm install

npm run start:dev