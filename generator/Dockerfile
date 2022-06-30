FROM node:16 AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY client .
RUN npm ci
# Build the app
RUN npm run build

FROM node:16 AS production
ENV NODE_ENV production
WORKDIR /app
COPY . .
RUN mkdir clientBuild
COPY --from=builder /app/build /clientBuild/
CMD ["npm start"]