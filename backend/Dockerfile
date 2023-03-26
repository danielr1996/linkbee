FROM node:18 As development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM node:18 As build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node . .
RUN npm install -g @nestjs/cli
RUN npm ci --only=production && npm cache clean --force
RUN npm run build

FROM node:18 As production
WORKDIR /usr/src/app
USER node
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
CMD [ "node", "dist/main.js" ]