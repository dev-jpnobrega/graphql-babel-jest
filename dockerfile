FROM node:8

# Disable color on npm output
RUN npm config set color false

RUN mkdir /graphql
COPY . /graphql
WORKDIR /graphql
RUN yarn install

RUN chown -R node:node /graph

USER node

EXPOSE 8082

CMD [ "npm", "test", "npm", "start" ]