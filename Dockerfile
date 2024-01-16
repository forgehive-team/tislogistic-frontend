# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package.json yarn.lock ./
RUN yarn add sharp --cpu=x64 --os=linux --libc=musl
RUN yarn install

COPY . .
RUN yarn run build > build.log 2>&1

# Stage 2: Create the final runtime image
FROM node:18-alpine

WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY --from=build /var/www/dockerize-nuxt/nuxt-app .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NUXT_PUBLIC_SITE_URL="https://tislogistic.ru"

CMD [ "node", ".output/server/index.mjs" ]

