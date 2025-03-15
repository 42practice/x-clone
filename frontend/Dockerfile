FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# pnpm をグローバルインストール
RUN npm install -g pnpm

# package.json と lock ファイルを先にコピー（キャッシュ最適化）
COPY ./x-clone/package.json ./

# 依存関係をインストール
RUN pnpm install

# 残りのソースコードをコピー
COPY x-clone ./

# Vite のポートを開放
EXPOSE 5173

# Vite を起動（外部からアクセスできるように --host 0.0.0.0 を指定）
# CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]
