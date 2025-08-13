ARG NODE_VERSION=20-alpine
FROM node:${NODE_VERSION} as builder
WORKDIR /app
COPY app/package.json app/package-lock.json* ./
RUN npm ci --ignore-scripts
COPY app/ ./
RUN npm test

FROM node:${NODE_VERSION} as runtime
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/*.js ./
EXPOSE 4000
CMD ["npm","start"]