# Initialize Client
echo "Initializing Client:"
yarn install
if [ $? -ne 0 ]; then
    echo "Error: Yarn install for Client failed."
    exit 1
fi

# Initialize Server
echo "Initializing Server:"
(cd server && yarn install && yarn run build)
if [ $? -ne 0 ]; then
    echo "Error: Yarn install for Server failed."
    exit 1
fi

echo "All components are installed."
