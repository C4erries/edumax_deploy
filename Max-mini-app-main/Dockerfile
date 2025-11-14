# syntax=docker/dockerfile:1
FROM node:20-alpine

WORKDIR /app

ARG VITE_API_BASE_URL=http://backend:8000/api/v1
ARG VITE_API_TOKEN=
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_API_TOKEN=${VITE_API_TOKEN}

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
