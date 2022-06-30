FROM node:16 AS builder
ENV NODE_ENV=production
ENV API_PATH=/generator/api
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY client .
RUN npm ci
# Build the app
RUN npm run build

FROM node:16 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=builder /app/build clientBuild/
RUN npm ci
CMD ["npm", "start"]