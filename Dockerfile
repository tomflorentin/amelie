FROM node:24-alpine AS deps-amelienergie
WORKDIR /repo
COPY packages/google-reviews ./packages/google-reviews
COPY apps/amelienergie/package.json apps/amelienergie/package-lock.json ./apps/amelienergie/
WORKDIR /repo/apps/amelienergie
RUN npm ci

FROM node:24-alpine AS builder-amelienergie
WORKDIR /repo
COPY packages/google-reviews ./packages/google-reviews
COPY --from=deps-amelienergie /repo/apps/amelienergie/node_modules ./apps/amelienergie/node_modules
COPY apps/amelienergie ./apps/amelienergie
WORKDIR /repo/apps/amelienergie
RUN npm run build

FROM node:24-alpine AS deps-pompihouse
WORKDIR /repo
COPY packages/google-reviews ./packages/google-reviews
COPY apps/pompihouse/package.json apps/pompihouse/package-lock.json ./apps/pompihouse/
WORKDIR /repo/apps/pompihouse
RUN npm ci

FROM node:24-alpine AS builder-pompihouse
WORKDIR /repo
COPY packages/google-reviews ./packages/google-reviews
COPY --from=deps-pompihouse /repo/apps/pompihouse/node_modules ./apps/pompihouse/node_modules
COPY apps/pompihouse ./apps/pompihouse
WORKDIR /repo/apps/pompihouse
RUN npm run build

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY start.js ./start.js

COPY --from=builder-amelienergie /repo/apps/amelienergie/public ./amelienergie/public
COPY --from=builder-amelienergie --chown=nextjs:nextjs /repo/apps/amelienergie/.next/standalone/apps/amelienergie ./amelienergie
COPY --from=builder-amelienergie --chown=nextjs:nextjs /repo/apps/amelienergie/.next/static ./amelienergie/.next/static

COPY --from=builder-pompihouse /repo/apps/pompihouse/public ./pompihouse/public
COPY --from=builder-pompihouse --chown=nextjs:nextjs /repo/apps/pompihouse/.next/standalone/apps/pompihouse ./pompihouse
COPY --from=builder-pompihouse --chown=nextjs:nextjs /repo/apps/pompihouse/.next/static ./pompihouse/.next/static

USER nextjs
EXPOSE 4000 4001
CMD ["node", "start.js"]
