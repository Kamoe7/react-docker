FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev

FROM nginx:alpine
COPY --from=build /app/build /user/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g" ,"daemon off;"]

# FROM node:18
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]