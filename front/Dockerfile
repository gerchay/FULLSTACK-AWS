
# build environment
FROM node:12-alpine as react-build
LABEL version="1.0"
LABEL description="This is the base docker image for the frontend react app."
LABEL maintainer = ["gerardo15.chay97@gmail.com"]
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE 3000
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"