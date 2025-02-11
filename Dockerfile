# Dockerfile
FROM node:18-alpine

# もしシェル操作をしやすくしたいなら bash 入れるなど
RUN apk add --no-cache bash

WORKDIR /app

# パッケージのインストール
COPY ./src/package*.json ./
RUN npm install

# デフォルトコマンドは「何もしない」状態にしておく
CMD ["tail", "-f", "/dev/null"]
