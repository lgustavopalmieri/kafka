FROM node:16.14.0-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 4444

CMD ["sh", "-c", "npm run start:dev"]