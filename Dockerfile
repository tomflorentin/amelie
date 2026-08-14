FROM node:24-alpine AS deps
WORKDIR /repo
COPY package.json package-lock.json ./
COPY apps/amelienergie/package.json apps/amelienergie/package.json
COPY apps/pompihouse/package.json apps/pompihouse/package.json
COPY packages/google-reviews/package.json packages/google-reviews/package.json
RUN npm ci

FROM node:24-alpine AS builder
WORKDIR /repo
COPY --from=deps /repo/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY start.js ./start.js
COPY --from=builder /repo/apps/amelienergie/out ./apps/amelienergie/out
COPY --from=builder /repo/apps/pompihouse/out ./apps/pompihouse/out

USER nextjs
EXPOSE 4000 4001
CMD ["node", "start.js"]
