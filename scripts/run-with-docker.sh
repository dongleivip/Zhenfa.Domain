#!/bin/bash

WORK_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.."  && pwd)"

echo "working directy is ${WORK_PATH}"

docker run --rm --name my-node-container -it -v ${WORK_PATH}:/code -p 4200:4200 -w="/code" node:15.8.0-alpine3.10 /bin/sh


# export PATH="/code/node_modules/.bin:$PATH"