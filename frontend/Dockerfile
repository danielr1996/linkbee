FROM node:18 As development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .

# FROM node:16.19-bullseye As build
# WORKDIR /usr/src/app
# COPY --chown=node:node package*.json ./
# COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node . .
# ARG BUILD_DEVELOPMENT

# # if --build-arg BUILD_DEVELOPMENT=1, set NODE_ENV to 'development' or set to null otherwise.
# ENV NODE_ENV=${BUILD_DEVELOPMENT:+development}
# # if NODE_ENV is null, set it to 'production' (or leave as is otherwise).
# ENV NODE_ENV=${NODE_ENV:-production}

# RUN npm run build
# RUN npm ci --only=production && npm cache clean --force
# USER node

# ###################
# # PRODUCTION
# ###################

# FROM node:16.19-bullseye As production

# WORKDIR /usr/src/app

# ARG BUILD_DEVELOPMENT
# # if --build-arg BUILD_DEVELOPMENT=1, set NODE_ENV to 'development' or set to null otherwise.
# ENV NODE_ENV=${BUILD_DEVELOPMENT:+development}
# # if NODE_ENV is null, set it to 'production' (or leave as is otherwise).
# ENV NODE_ENV=${NODE_ENV:-production}

# # Use the node user from the image (instead of the root user)
# USER node

# # Copy the bundled code from the build stage to the production image
# COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
# COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]