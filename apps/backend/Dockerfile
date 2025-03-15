FROM node

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

EXPOSE 3000

CMD ["pnpm","dev","--host"]
