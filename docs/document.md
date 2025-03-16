# 要件定義

## x-clone

### フォルダ構成

1. バックエンド
``` bash
src/
├── lib #必要ならサードパーティライブラリのカスタムラッパーを配置
├── middleware # 認証(auth)、エラーハンドリングなどの共通処理をまとめる
├── models # projecrのメインロジック
├── routes # ルーティングの処理
├── types # プロジェクト全体で共通の型 typeやinterfaceなど
├── utils # ロジックを簡略化するユーティリティ関数 (例: 日付フォーマットやJWT処理)
└── index.ts # エントリポイント
```
2. フロントエンド

``` bash
src/
├── app #全体で共通のレイアウトなど
├── components #共通components
├── features/ # 各機能ごとにディレクトリを分割
│   ├── auth/
│   │   ├── components
│   │   ├── hooks
│   │   ├── utils
│   │   ├── lib
│   │   └── types
│   └── dashboard
├── hooks # カスタムフックを機能横断的に利用可能
├── lib # フロントエンドのサードパーティライブラリ
├── utils # ロジックを簡略化するユーティリティ関数 (例: 日付フォーマットやJWT処理)
├── types # プロジェクト全体で共通の型 typeやinterfaceなど
├── index.css # グローバルCSS
├── main.tsx # エントリポイント
└── vite-env.d.ts # Vite固有の型補完設定
```

