# Initialize a new build context
FROM node:14
# Set the working directory
WORKDIR /usr/src/my_node_app
# Copy package.json and package-lock.json to the container
COPY ["package.json", "package-lock.json*", "./"]
# Install dependencies
RUN npm install
# Copy the app source code
COPY . .
# Set default port
EXPOSE 8080
# Run the application
CMD [ "node", "server.js" ]

# https://hub.docker.com/repository/docker/tusiaa/simple_express