FROM node:14

# Create app directory
WORKDIR /usr/src/app
ENV NODE_ENV dev
ENV PORT 80


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "run", "start" ]

