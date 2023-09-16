import maginai from "maginai";

// 名前の短縮のため変数に代入
const ev = maginai.events;

// ゲームのロードが終了しタイトル画面が表示されるときに…
ev.gameLoadFinished.addHandler(() => {
  // 〜.load_okがセーブロード時の「ロードしました。」なので、これを差し替え
  tWgm.tGameTalkResource.talkData.system.load_ok = "Hello, World!";
});
