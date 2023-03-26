FROM node:18 As development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM node:18 As build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node . .
RUN npm ci --only=production && npm cache clean --force
RUN npm run build
USER node

FROM nginx As production
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/build .