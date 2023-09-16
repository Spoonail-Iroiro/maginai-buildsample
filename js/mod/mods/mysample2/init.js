import maginai from "maginai";

// 名前の短縮のため変数に代入
const pt = maginai.patcher;

// tGameLogクラスのaddLogメソッドにパッチ
// 引数が渡されるorigMethod＝もともとのaddLogメソッド
pt.patchMethod(tGameLog, "addLog", (origMethod) => {
  // 新しいaddLogメソッドは…
  const rtnFn = function (message, ...args) {
    // 第一引数で渡されるメッセージが、"ロードしました。"なら"Hello, World"に置換する
    const newMessage = message.replace("ロードしました。", "Hello, World!");
    // 置換後のメッセージでもともとのaddLogを呼び出す
    origMethod.call(this, newMessage, ...args);
  };
  return rtnFn;
});
