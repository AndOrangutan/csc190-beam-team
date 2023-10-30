#!/bin/bash

# Initialize Client
echo "Initializing Client:"
yarn install
if [ $? -ne 0 ]; then
    echo "Error: Yarn install for Client failed."
    exit 1
fi

# Initialize Server
echo "Initializing Server:"
(cd server && yarn install)
if [ $? -ne 0 ]; then
    echo "Error: Yarn install for Server failed."
    exit 1
fi

# Start Server
echo "Starting Server:"
(cd server && yarn run build && yarn run start)
if [ $? -ne 0 ]; then
    echo "Error: Starting Server failed."
    exit 1
fi

# Start Client
echo "Starting Client:"
yarn run start
if [ $? -ne 0 ]; then
    echo "Error: Starting Client failed."
    exit 1
fi

echo "All components are running."
