import maginai from "maginai";
import { logMessage } from "./modules/message";

// 名前の短縮のため変数に代入（※サブモジュール類はこのように別の変数に代入して利用可）
const ev = maginai.events;

// ロードしたメッセージを格納する変数
let message;

// メッセージを外部jsファイルからロード
const postprocess = maginai
  .loadJsData("./js/mod/mods/buildsample/message.js")
  .then((loaded) => {
    // ロードしたメッセージを変数にセット
    message = loaded["message"];
  });
// メッセージのロードがゲームロードの前（および次のMODのロード前）に確実に終わるPostprocessとなるように
// setModPostprocessでPromiseをセット
maginai.setModPostprocess(postprocess);
// ※複数のPromiseをPostprocessとしてセットしたい場合はPromise.allを使用したりthenでチェインして一つのPromiseにした状態でセットする必要あり

// ゲームのロードが完了したときにメッセージを表示するイベントハンドラーを登録
ev.gameLoadFinished.addHandler(() => {
  logMessage(message);
});
