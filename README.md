[maginai](https://github.com/Spoonail-Iroiro/maginai)用Modのサンプルです。  
viteを使用したESModule→スクリプト（`iife`ビルド）構成例および、Modの内容としては以下を含む作成例になっています。
- `maginai.loadJsData`を使用した外部データ読み込み
- `maginai.setModPostprocess`による非同期処理の登録（ゲームロード前に完了します）
- `maginai.events`イベントへのイベントハンドラー登録

Modのエントリポイントは`js/mod/mods/buildsample/init.js`にあります。

# Release
ビルド済のMod自体`buildsample.zip`はReleaseページからダウンロードしてください。

https://github.com/Spoonail-Iroiro/maginai-buildsample/releases

`message.js`からメッセージを読み取り、開発者コンソールとゲーム内ログに出力するサンプルModになっています。  

# Build

```sh
npm install 
npm run dev
```

`game/game/js/mod/mods/buildsample`  
にビルドされます。  
`game`フォルダがmaginai導入済みの異世界の創造者ゲームフォルダであれば、ビルド後そのまま実行して動作確認できる構成となっています。

# Mod作成テンプレートとして使う場合
`npm instal`後、以下のコマンドで`maginai`パッケージの最新をインストールできます。

```sh
npm update maginai
```

※  
`maginai`パッケージの提供は型の参照やテスト用を目的としており、ビルドしたModにバンドルしてはいけません。  
本リポジトリでは`maginai`をバンドルから除外する設定も`vite.config.js`に記載していますので参考にしてください。  
