FROM node:24-alpine AS deps-amelienergie
WORKDIR /app
COPY apps/amelienergie/package.json apps/amelienergie/package-lock.json ./
RUN npm ci

FROM node:24-alpine AS builder-amelienergie
WORKDIR /app
COPY --from=deps-amelienergie /app/node_modules ./node_modules
COPY apps/amelienergie/. .
RUN npm run build

FROM node:24-alpine AS deps-pompihouse
WORKDIR /app
COPY apps/pompihouse/package.json apps/pompihouse/package-lock.json ./
RUN npm ci

FROM node:24-alpine AS builder-pompihouse
WORKDIR /app
COPY --from=deps-pompihouse /app/node_modules ./node_modules
COPY apps/pompihouse/. .
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY start.js ./start.js

COPY --from=builder-amelienergie /app/public ./amelienergie/public
COPY --from=builder-amelienergie --chown=nextjs:nextjs /app/.next/standalone ./amelienergie
COPY --from=builder-amelienergie --chown=nextjs:nextjs /app/.next/static ./amelienergie/.next/static

COPY --from=builder-pompihouse /app/public ./pompihouse/public
COPY --from=builder-pompihouse --chown=nextjs:nextjs /app/.next/standalone ./pompihouse
COPY --from=builder-pompihouse --chown=nextjs:nextjs /app/.next/static ./pompihouse/.next/static

USER nextjs
EXPOSE 4000 4001
CMD ["node", "start.js"]
