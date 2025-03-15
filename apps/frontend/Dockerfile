FROM node:lts

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# pnpm をグローバルインストール
RUN npm install -g pnpm

# package.json と lock ファイルを先にコピー（キャッシュ最適化）
COPY ./package.json ./

# 依存関係をインストール
RUN pnpm install

# 残りのソースコードをコピー
COPY ./ ./

# Vite のポートを開放
EXPOSE 5173

# Vite を起動（外部からアクセスできるように --host 0.0.0.0 を指定）
CMD ["pnpm","dev","--host"]
