# Initialize a new build context
FROM node:14
# Set the working directory
WORKDIR /usr/src/my_react_app
# Copy package.json and package-lock.json to the container
COPY ["package.json", "package-lock.json*", "./"]
# Install dependencies
RUN npm install
# Copy the app source code
COPY . .
# Set default port
EXPOSE 3100
# Run the application
CMD npm start

# https://hub.docker.com/repository/docker/tusiaa/simple_express