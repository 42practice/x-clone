# x-clone

## 開発環境の起動方法
初回起動や `Dockerfile` `docker-compose.yaml` を修正した際、
また、新しいパッケージを追加した場合
```bash
docker compose up --build
```
単なる再起動の場合
```bash
docker compose up
```
### ブランチ戦略
- github-flow

- git関連設定 マージ時にdeleteブランチ

### 使用技術
1. クライアントサイド
   - React

2. サーバーサイド
   - hono


### フォルダ構成
``` sh
├── apps/
│   ├── frontend
│   └── backend
├── docs/
│   ├── api.yaml
│   └── document.md
└── docker-compose.yaml
```
