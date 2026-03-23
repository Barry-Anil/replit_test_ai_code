FROM node:24-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./


FROM base AS deps

COPY lib/db/package.json ./lib/db/
COPY lib/api-spec/package.json ./lib/api-spec/
COPY lib/api-zod/package.json ./lib/api-zod/
COPY lib/api-client-react/package.json ./lib/api-client-react/
COPY artifacts/api-server/package.json ./artifacts/api-server/
COPY artifacts/chowdeck-web/package.json ./artifacts/chowdeck-web/

RUN pnpm install --frozen-lockfile


FROM deps AS build-api

COPY lib ./lib
COPY artifacts/api-server ./artifacts/api-server

RUN pnpm --filter @workspace/api-spec run codegen && \
    pnpm --filter @workspace/api-server run build


FROM deps AS build-web

COPY lib ./lib
COPY artifacts/chowdeck-web ./artifacts/chowdeck-web
COPY attached_assets ./attached_assets

ARG BASE_PATH=/
ENV BASE_PATH=${BASE_PATH}
ENV PORT=3000

RUN pnpm --filter @workspace/api-spec run codegen && \
    pnpm --filter @workspace/chowdeck-web run build


FROM node:24-slim AS runner

WORKDIR /app

COPY --from=build-api /app/artifacts/api-server/dist ./dist

COPY --from=build-web /app/artifacts/chowdeck-web/dist/public ./dist/public

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["node", "--enable-source-maps", "dist/index.mjs"]
