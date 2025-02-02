# Dockerfile (Dev 用)
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /app

# package.json と package-lock.json を先にコピー
COPY package*.json ./

# npm install
RUN npm install

# ソースコードをコピー
# (volume マウントするのでコピーしなくても OK とする場合も)
COPY . .

EXPOSE 3000

# コンテナ起動時に Next.js の開発サーバーを立ち上げる
CMD ["npm", "run", "dev"]
