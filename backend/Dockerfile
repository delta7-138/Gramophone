#get the latest alpine image from node registry
FROM node:alpine

#set environment variables for backend
ENV CONNECTION_URI = $(CONNECTION_URI)
ENV jwt_config = $(jwt_config)

RUN /bin/echo $(CONNECTION_URI)
RUN /bin/echo $(jwt_config)
#set the working directory
WORKDIR /app

#copy the package and package lock files
#from local to container work directory /app
COPY package*.json /app/

#Run command npm install to install packages
RUN npm install --force


#copy all the folder contents from local to container
COPY . .

# RUN npm test

EXPOSE 5000
CMD [ "npm", "start" ]
