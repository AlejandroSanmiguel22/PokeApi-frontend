# Etapa 1: Build de la app Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Servidor NGINX
FROM nginx:alpine

# Elimina la configuración por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia la app compilada al directorio público de nginx
COPY --from=build /app/dist/pokemon-app/browser /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
