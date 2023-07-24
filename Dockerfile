FROM node:18.15

WORKDIR /usr/app/
COPY . /usr/app/

RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT npm run start