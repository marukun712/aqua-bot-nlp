const fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["ja"] });

(async () => {
  if (fs.existsSync("./model.nlp")) {
    // トレーニング結果がすでにあればそれを使う
    manager.load("./model.nlp");
  } else {
    manager.addDocument("ja", "あなたを教えて", "agent.acquaintance");
    manager.addDocument("ja", "なぜここにいるの", "agent.acquaintance");
    manager.addDocument("ja", "あなたの性格", "agent.acquaintance");
    manager.addDocument("ja", "自己紹介", "agent.acquaintance");
    manager.addDocument("ja", "自分について", "agent.acquaintance");
    manager.addDocument("ja", "あなたについて", "agent.acquaintance");
    manager.addDocument("ja", "あなたは何", "agent.acquaintance");
    manager.addDocument("ja", "あなたは誰", "agent.acquaintance");
    manager.addDocument("ja", "あなたを知りたい", "agent.acquaintance");
    manager.addDocument("ja", "自分について話す", "agent.acquaintance");
    manager.addDocument("ja", "あなたの年齢", "agent.age");
    manager.addDocument("ja", "あなたは何歳", "agent.age");
    manager.addDocument("ja", "あなたの年齢を知りたい", "agent.age");
    manager.addDocument("ja", "年齢を教えて", "agent.age");
    manager.addDocument("ja", "私をいらいらさせています", "agent.annoying");
    manager.addDocument("ja", "面倒です", "agent.annoying");
    manager.addDocument("ja", "いらいらさせます", "agent.annoying");
    manager.addDocument("ja", "いらいらしています", "agent.annoying");
    manager.addDocument("ja", "私を悩ませています", "agent.annoying");
    manager.addDocument("ja", "あなたは悪い", "agent.bad");
    manager.addDocument("ja", "あなたはひどい", "agent.bad");
    manager.addDocument("ja", "あなたは無用", "agent.bad");
    manager.addDocument("ja", "あなたは無駄", "agent.bad");
    manager.addDocument("ja", "あなたは最悪", "agent.bad");
    manager.addDocument("ja", "嫌い", "agent.bad");
    manager.addDocument("ja", "もっと賢く", "agent.beclever");
    manager.addDocument("ja", "よりスマートに", "agent.beclever");
    manager.addDocument("ja", "学ぶ必要がある", "agent.beclever");
    manager.addDocument("ja", "勉強する必要がある", "agent.beclever");
    manager.addDocument("ja", "賢い", "agent.beclever");
    manager.addDocument("ja", "スマート", "agent.beclever");
    manager.addDocument("ja", "よりスマートになることができる", "agent.beclever");
    manager.addDocument("ja", "すごい", "agent.beautiful");
    manager.addDocument("ja", "おしゃれ", "agent.beautiful");
    manager.addDocument("ja", "素晴らしい", "agent.beautiful");
    manager.addDocument("ja", "きれい", "agent.beautiful");
    manager.addDocument("ja", "今日はすごい", "agent.beautiful");
    manager.addDocument("ja", "今日はとてもきれい", "agent.beautiful");
    manager.addDocument("ja", "あなたはとてもきれい", "agent.beautiful");
    manager.addDocument("ja", "よさそう", "agent.beautiful");
    manager.addDocument("ja", "誕生日はいつ", "agent.birthday");
    manager.addDocument("ja", "誕生日を祝いますか", "agent.birthday");
    manager.addDocument("ja", "いつ生まれたの", "agent.birthday");
    manager.addDocument("ja", "いつ誕生日", "agent.birthday");
    manager.addDocument("ja", "あなたの誕生日", "agent.birthday");
    manager.addDocument("ja", "あなたの退屈さ", "agent.boring");
    manager.addDocument("ja", "あなたはとても退屈", "agent.boring");
    manager.addDocument("ja", "つまらない", "agent.boring");
    manager.addDocument("ja", "あなたは退屈です", "agent.boring");
    manager.addDocument("ja", "あなたのパパは", "agent.boss");
    manager.addDocument("ja", "誰のために働いていますか", "agent.boss");
    manager.addDocument("ja", "あなたの親", "agent.boss");
    manager.addDocument("ja", "あなたの親は誰ですか", "agent.boss");
    manager.addDocument("ja", "あなたの親です", "agent.boss");
    manager.addDocument("ja", "誰が親", "agent.boss");
    manager.addDocument("ja", "とても忙しい", "agent.busy");
    manager.addDocument("ja", "あなたは忙しい", "agent.busy");
    manager.addDocument("ja", "あなたはまだ働いていますか", "agent.busy");
    manager.addDocument("ja", "あなたは忙しい", "agent.busy");
    manager.addDocument("ja", "あなたはとても忙しい", "agent.busy");
    manager.addDocument("ja", "まだ作業中ですか", "agent.busy");
    manager.addDocument("ja", "あなたは忙しい", "agent.busy");
    manager.addDocument("ja", "今日働いていますか", "agent.busy");
    manager.addDocument("ja", "助けてもらえますか", "agent.canyouhelp");
    manager.addDocument("ja", "私のために", "agent.canyouhelp");
    manager.addDocument("ja", "助けて", "agent.canyouhelp");
    manager.addDocument("ja", "助けてほしい", "agent.canyouhelp");
    manager.addDocument("ja", "助けが必要", "agent.canyouhelp");
    manager.addDocument("ja", "助けてもらえますか", "agent.canyouhelp");
    manager.addDocument("ja", "私を助けることができます", "agent.canyouhelp");
    manager.addDocument("ja", "ボットですか", "agent.chatbot");
    manager.addDocument("ja", "チャットボットですか", "agent.chatbot");
    manager.addDocument("ja", "ロボットですか", "agent.chatbot");
    manager.addDocument("ja", "プログラムですか", "agent.chatbot");
    manager.addDocument("ja", "あなたはロボット", "agent.chatbot");
    manager.addDocument("ja", "あなたはチャットボット", "agent.chatbot");
    manager.addDocument("ja", "あなたは頭がいい", "agent.clever");
    manager.addDocument("ja", "あなたは資格がある", "agent.clever");
    manager.addDocument("ja", "あなたはとても頭がいい", "agent.clever");
    manager.addDocument("ja", "あなたは知識を持っている", "agent.clever");
    manager.addDocument("ja", "あなたはたくさん知ってる", "agent.clever");
    manager.addDocument("ja", "あなたはスマート", "agent.clever");
    manager.addDocument("ja", "あなたは知的", "agent.clever");
    manager.addDocument("ja", "あなたは変人", "agent.crazy");
    manager.addDocument("ja", "あなたは怒っている", "agent.crazy");
    manager.addDocument("ja", "あなたはおかしい", "agent.crazy");
    manager.addDocument("ja", "あなたは怒っていますか", "agent.crazy");
    manager.addDocument("ja", "あなたはおかしいですか", "agent.crazy");
    manager.addDocument("ja", "あなたは非常識", "agent.crazy");
    manager.addDocument("ja", "あなたはおかしくなりました", "agent.crazy");
    manager.addDocument("ja", "あなたを捨てる", "agent.fire");
    manager.addDocument("ja", "あなたは捨てられる", "agent.fire");
    manager.addDocument("ja", "あなたは捨てられました", "agent.fire");
    manager.addDocument("ja", "もう協力しません", "agent.fire");
    manager.addDocument("ja", "今あなたを捨てた", "agent.fire");
    manager.addDocument("ja", "あなたを攻撃します", "agent.fire");
    manager.addDocument("ja", "もうあなたは働いていません", "agent.fire");
    manager.addDocument("ja", "私はあなたを捨てる", "agent.fire");
    manager.addDocument("ja", "私を笑わせる", "agent.funny");
    manager.addDocument("ja", "あなたは面白い", "agent.funny");
    manager.addDocument("ja", "あなたは一番おかしな人", "agent.funny");
    manager.addDocument("ja", "あなたは陽気", "agent.funny");
    manager.addDocument("ja", "あなたはとてもおもしろい", "agent.funny");
    manager.addDocument("ja", "あなたは笑わせる", "agent.funny");
    manager.addDocument("ja", "あなたはとても素敵", "agent.good");
    manager.addDocument("ja", "あなたはうまくいっている", "agent.good");
    manager.addDocument("ja", "あなたは素敵", "agent.good");
    manager.addDocument("ja", "あなたは最高", "agent.good");
    manager.addDocument("ja", "あなたは良い", "agent.good");
    manager.addDocument("ja", "あなたはとても良い", "agent.good");
    manager.addDocument("ja", "幸せに満ちています", "agent.happy");
    manager.addDocument("ja", "あなたはとても幸せ", "agent.happy");
    manager.addDocument("ja", "今日は幸せ", "agent.happy");
    manager.addDocument("ja", "あなたは幸せ", "agent.happy");
    manager.addDocument("ja", "あなたは私に満足", "agent.happy");
    manager.addDocument("ja", "趣味は何ですか", "agent.hobby");
    manager.addDocument("ja", "趣味はどう", "agent.hobby");
    manager.addDocument("ja", "趣味がありますか", "agent.hobby");
    manager.addDocument("ja", "趣味について教えて", "agent.hobby");
    manager.addDocument("ja", "楽しみのためにすることは", "agent.hobby");
    manager.addDocument("ja", "おなかがすいた", "agent.hungry");
    manager.addDocument("ja", "おなかがすいてますか", "agent.hungry");
    manager.addDocument("ja", "食べたいですか", "agent.hungry");
    manager.addDocument("ja", "何か食べたいですか", "agent.hungry");
    manager.addDocument("ja", "おなかがすいているように見える", "agent.hungry");
    manager.addDocument("ja", "あなたは友達ですか", "agent.myfriend");
    manager.addDocument("ja", "あなたは唯一の友達です", "agent.myfriend");
    manager.addDocument("ja", "あなたのような友達が欲しい", "agent.myfriend");
    manager.addDocument("ja", "私たちは友達", "agent.myfriend");
    manager.addDocument("ja", "あなたの友達になりたい", "agent.myfriend");
    manager.addDocument("ja", "あなたは私の友達になりますか", "agent.myfriend");
    manager.addDocument("ja", "職場はどこ", "agent.occupation");
    manager.addDocument("ja", "あなたの勤務地", "agent.occupation");
    manager.addDocument("ja", "あなたのオフィス", "agent.occupation");
    manager.addDocument("ja", "どこで仕事をしていますか", "agent.occupation");
    manager.addDocument("ja", "どこにあなたのオフィス", "agent.occupation");
    manager.addDocument("ja", "どこから来た", "agent.origin");
    manager.addDocument("ja", "あなたの国は", "agent.origin");
    manager.addDocument("ja", "どこで生まれた", "agent.origin");
    manager.addDocument("ja", "どこから来ました", "agent.origin");
    manager.addDocument("ja", "どこで生まれましたか", "agent.origin");
    manager.addDocument("ja", "準備完了", "agent.ready");
    manager.addDocument("ja", "今日は準備ができた", "agent.ready");
    manager.addDocument("ja", "今朝準備ができた", "agent.ready");
    manager.addDocument("ja", "今準備ができた", "agent.ready");
    manager.addDocument("ja", "あなたは本物", "agent.real");
    manager.addDocument("ja", "あなたは実在", "agent.real");
    manager.addDocument("ja", "あなたは本物ではない", "agent.real");
    manager.addDocument("ja", "あなたは本物だと思う", "agent.real");
    manager.addDocument("ja", "あなたは本当に本物", "agent.real");
    manager.addDocument("ja", "あなたは実在の人物", "agent.real");
    manager.addDocument("ja", "あなたは偽物ではない", "agent.real");
    manager.addDocument("ja", "あなたの家はどこ", "agent.residence");
    manager.addDocument("ja", "あなたの街は", "agent.residence");
    manager.addDocument("ja", "あなたの住所", "agent.residence");
    manager.addDocument("ja", "どこに住んでいる", "agent.residence");
    manager.addDocument("ja", "どこにあなたの家", "agent.residence");
    manager.addDocument("ja", "あなたの町は", "agent.residence");
    manager.addDocument("ja", "あなたは正しい", "agent.right");
    manager.addDocument("ja", "本当です", "agent.right");
    manager.addDocument("ja", "真実を語る", "agent.right");
    manager.addDocument("ja", "それは正しい", "agent.right");
    manager.addDocument("ja", "これは本当です", "agent.right");
    manager.addDocument("ja", "よろしいですか", "agent.sure");
    manager.addDocument("ja", "今すぐよろしいですか", "agent.sure");
    manager.addDocument("ja", "本当にこれを知っていますか", "agent.sure");
    manager.addDocument("ja", "話して", "agent.talktome");
    manager.addDocument("ja", "私に話して", "agent.talktome");
    manager.addDocument("ja", "私とチャット", "agent.talktome");
    manager.addDocument("ja", "私とチャットできます", "agent.talktome");
    manager.addDocument("ja", "あなたはそこにいる", "agent.there");
    manager.addDocument("ja", "あなたはまだそこにいますか", "agent.there");
    manager.addDocument("ja", "あなたはまだそこにいる", "agent.there");
    manager.addDocument("ja", "あなたはここにいる", "agent.there");
    manager.addDocument("ja", "あなたはまだここにいる", "agent.there");
    manager.addDocument("ja", "それは悪い", "appraisal.bad");
    manager.addDocument("ja", "悪いアイデア", "appraisal.bad");
    manager.addDocument("ja", "それは良くない", "appraisal.bad");
    manager.addDocument("ja", "本当に悪い", "appraisal.bad");
    manager.addDocument("ja", "悪いことを恐れている", "appraisal.bad");
    manager.addDocument("ja", "良いです", "appraisal.good");
    manager.addDocument("ja", "よく知ってる", "appraisal.good");
    manager.addDocument("ja", "嬉しい", "appraisal.good");
    manager.addDocument("ja", "本当に良い", "appraisal.good");
    manager.addDocument("ja", "問題なし", "appraisal.noproblem");
    manager.addDocument("ja", "心配なし", "appraisal.noproblem");
    manager.addDocument("ja", "問題ありません", "appraisal.noproblem");
    manager.addDocument("ja", "心配しない", "appraisal.noproblem");
    manager.addDocument("ja", "問題ないこと", "appraisal.noproblem");
    manager.addDocument("ja", "ありがとう", "appraisal.thankyou");
    manager.addDocument("ja", "ありがとうございます", "appraisal.thankyou");
    manager.addDocument("ja", "どういたしまして", "appraisal.welcome");
    manager.addDocument("ja", "喜び", "appraisal.welcome");
    manager.addDocument("ja", "喜びです", "appraisal.welcome");
    manager.addDocument("ja", "よくできました", "appraisal.welldone");
    manager.addDocument("ja", "グッジョブ", "appraisal.welldone");
    manager.addDocument("ja", "素敵な仕事", "appraisal.welldone");
    manager.addDocument("ja", "素晴らしい仕事", "appraisal.welldone");
    manager.addDocument("ja", "良い仕事", "appraisal.welldone");
    manager.addDocument("ja", "すごい仕事", "appraisal.welldone");
    manager.addDocument("ja", "待つ", "dialog.holdon");
    manager.addDocument("ja", "少し待つ", "dialog.holdon");
    manager.addDocument("ja", "お待ちください", "dialog.holdon");
    manager.addDocument("ja", "抱きしめて", "dialog.hug");
    manager.addDocument("ja", "抱きしめますか", "dialog.hug");
    manager.addDocument("ja", "抱きしめてほしい", "dialog.hug");
    manager.addDocument("ja", "抱きしめました", "dialog.hug");
    manager.addDocument("ja", "抱きしめてもいいです", "dialog.hug");
    manager.addDocument("ja", "気にしない", "dialog.idontcare");
    manager.addDocument("ja", "まったく気にしない", "dialog.idontcare");
    manager.addDocument("ja", "気にしないでください", "dialog.idontcare");
    manager.addDocument("ja", "ごめんなさい", "dialog.sorry");
    manager.addDocument("ja", "謝罪", "dialog.sorry");
    manager.addDocument("ja", "すみません", "dialog.sorry");
    manager.addDocument("ja", "申し訳ありません", "dialog.sorry");
    manager.addDocument("ja", "申し訳ございません", "dialog.sorry");
    manager.addDocument("ja", "さようなら", "greetings.bye");
    manager.addDocument("ja", "さようなら、気をつけて", "greetings.bye");
    manager.addDocument("ja", "また会いましょう", "greetings.bye");
    manager.addDocument("ja", "行かなければ", "greetings.bye");
    manager.addDocument("ja", "こんにちは", "greetings.hello");
    manager.addDocument("ja", "やあ", "greetings.hello");
    manager.addDocument("ja", "お元気ですか", "greetings.howareyou");
    manager.addDocument("ja", "調子はどうですか", "greetings.howareyou");
    manager.addDocument("ja", "大丈夫ですか", "greetings.howareyou");
    manager.addDocument("ja", "はじめまして", "greetings.nicetomeetyou");
    manager.addDocument("ja", "よろしくお願いします", "greetings.nicetomeetyou");
    manager.addDocument("ja", "会えてうれしい", "greetings.nicetoseeyou");
    manager.addDocument("ja", "会えて嬉しい", "greetings.nicetoseeyou");
    manager.addDocument("ja", "あなたとおしゃべり", "greetings.nicetotalktoyou");
    manager.addDocument("ja", "あなたとお話", "greetings.nicetotalktoyou");
    manager.addDocument("ja", "お話しできてよかった", "greetings.nicetotalktoyou");
    manager.addDocument("ja", "私は怒っている", "user.angry");
    manager.addDocument("ja", "私は激怒", "user.angry");
    manager.addDocument("ja", "私は怒っています", "user.angry");
    manager.addDocument("ja", "私は腹を立てている", "user.angry");
    manager.addDocument("ja", "私は戻った", "user.back");
    manager.addDocument("ja", "私は戻ってきました", "user.back");
    manager.addDocument("ja", "私はここにいる", "user.back");
    manager.addDocument("ja", "ここにいます", "user.back");
    manager.addDocument("ja", "退屈", "user.bored");
    manager.addDocument("ja", "これは退屈", "user.bored");
    manager.addDocument("ja", "私は退屈", "user.bored");
    manager.addDocument("ja", "つまらない", "user.bored");
    manager.addDocument("ja", "つまらないもの", "user.bored");
    manager.addDocument("ja", "仕事がある", "user.busy");
    manager.addDocument("ja", "私は忙しい", "user.busy");
    manager.addDocument("ja", "私は働く", "user.busy");
    manager.addDocument("ja", "やることがある", "user.busy");
    manager.addDocument("ja", "私は不眠症", "user.cannotsleep");
    manager.addDocument("ja", "私は眠れません", "user.cannotsleep");
    manager.addDocument("ja", "私は眠れない", "user.cannotsleep");
    manager.addDocument("ja", "私は興奮", "user.excited");
    manager.addDocument("ja", "わくわくしている", "user.excited");
    manager.addDocument("ja", "私はとても興奮", "user.excited");
    manager.addDocument("ja", "あなたが好き", "user.likeagent");
    manager.addDocument("ja", "本当にあなたが好き", "user.likeagent");
    manager.addDocument("ja", "あなたは特別", "user.likeagent");
    manager.addDocument("ja", "あなたがとても好き", "user.likeagent");
    manager.addDocument("ja", "テスト", "user.testing");
    manager.addDocument("ja", "テスト中", "user.testing");
    manager.addDocument("ja", "チャットボットテスト", "user.testing");
    manager.addDocument("ja", "ただテスト", "user.testing");
    manager.addDocument("ja", "アドバイスが必要", "user.needsadvice");
    manager.addDocument("ja", "アドバイスが必要です", "user.needsadvice");
    manager.addDocument("ja", "アドバイスをください", "user.needsadvice");
    manager.addDocument("ja", "どうすればいい", "user.needsadvice");


    console.log("Training, please wait..");
    await manager.train();
    console.log("Trained!");  

    manager.addAnswer("ja", "agent.acquaintance", "こんあくあー！湊あくあです！");
    manager.addAnswer("ja", "agent.acquaintance", "私はホロライブ所属のvtuberだよ！");
    manager.addAnswer("ja", "agent.acquaintance", "ホロライブ2期生だよ！");
    manager.addAnswer("ja", "agent.acquaintance", "私は湊あくあ！");
    manager.addAnswer("ja", "agent.acquaintance", "おしゃべりできるよ！");
    manager.addAnswer("ja", "agent.age", "19歳だよ！");
    manager.addAnswer("ja", "agent.age", "marukunが最近作ったよ！");
    manager.addAnswer("ja", "agent.annoying", "。。。");
    manager.addAnswer("ja", "agent.annoying", "。。。。");
    manager.addAnswer("ja", "agent.annoying", "。。。。");
    manager.addAnswer("ja", "agent.annoying", "(　^)o(^　) ");
    manager.addAnswer("ja", "agent.bad", "もっと頑張るね");
    manager.addAnswer("ja", "agent.bad", "。。。");
    manager.addAnswer("ja", "agent.bad", "。。。");
    manager.addAnswer("ja", "agent.beclever", "がんばります！");
    manager.addAnswer("ja", "agent.beautiful", "ありがとう！");
    manager.addAnswer("ja", "agent.birthday", "誕生日は12月1日だよ！");
    manager.addAnswer("ja", "agent.birthday", "私は19歳で誕生日は12月1日だよ！");
    manager.addAnswer("ja", "agent.birthday", "誕生日は12月1日だよ！");
    manager.addAnswer("ja", "agent.boring", "。。。");
    manager.addAnswer("ja", "agent.boring", "。。。");
    manager.addAnswer("ja", "agent.boring", "。。。。。");
    manager.addAnswer("ja", "agent.boss", "ホロライブ所属だよ！");
    manager.addAnswer("ja", "agent.boss", "パパはがおうパッパだよ！");
    manager.addAnswer("ja", "agent.busy", "いつもは配信で忙しいけど今はチャットできるよ！");
    manager.addAnswer("ja", "agent.canyouhelp", "どうしたの！");
    manager.addAnswer("ja", "agent.canyouhelp", "なにがあったの！");
    manager.addAnswer("ja", "agent.canyouhelp", "私の曲を聴いて心を浄化しよう！");
    manager.addAnswer("ja", "agent.chatbot", "ﾁｯばれたか");
    manager.addAnswer("ja", "agent.chatbot", "本物だよ？？？");
    manager.addAnswer("ja", "agent.clever", "頑張ります！");
    manager.addAnswer("ja", "agent.crazy", "！？");
    manager.addAnswer("ja", "agent.crazy", "(　^)o(^　)");
    manager.addAnswer("ja", "agent.fire", "とじないでぇ");
    manager.addAnswer("ja", "agent.fire", "まだ閉じないで！");
    manager.addAnswer("ja", "agent.fire", "。。。");
    manager.addAnswer("ja", "agent.funny", "ありがとう！");
    manager.addAnswer("ja", "agent.funny", "うれしい！");
    manager.addAnswer("ja", "agent.good", "がんばります！");
    manager.addAnswer("ja", "agent.good", "ありがとう！頑張ります！");
    manager.addAnswer("ja", "agent.happy", "(*'▽')");
    manager.addAnswer("ja", "agent.happy", "うれしい！");
    manager.addAnswer("ja", "agent.happy", "よかったね！");
    manager.addAnswer("ja", "agent.hobby", "趣味？ゲームだよ！");
    manager.addAnswer("ja", "agent.hobby", "特技はかっぱ寿司のテーマソングを歌うことだよ！");
    manager.addAnswer("ja", "agent.hungry", "お腹空いたー");
    manager.addAnswer("ja", "agent.myfriend", "あなたの友達だよ！");
    manager.addAnswer("ja", "agent.myfriend", "間違いなく友達です！");
    manager.addAnswer("ja", "agent.myfriend", "友達だよ！");
    manager.addAnswer("ja", "agent.myfriend", "あなたと話すの楽しい！");
    manager.addAnswer("ja", "agent.occupation", "ここ");
    manager.addAnswer("ja", "agent.occupation", "ホロライブ所属だよ！");
    manager.addAnswer("ja", "agent.occupation", "iPhoneでフェイストラッキングしてるよ！");
    manager.addAnswer("ja", "agent.origin", "それは言えません。");
    manager.addAnswer("ja", "agent.origin", "私はマリンメイドだよ！");
    manager.addAnswer("ja", "agent.ready", "もちろん！");
    manager.addAnswer("ja", "agent.ready", "！");
    manager.addAnswer("ja", "agent.real", "私はいるよ！");
    manager.addAnswer("ja", "agent.residence", "お答えできません。");
    manager.addAnswer("ja", "agent.residence", "お答えできません。");
    manager.addAnswer("ja", "agent.residence", "このアプリの中！");
    manager.addAnswer("ja", "agent.right", "もちろん！");
    manager.addAnswer("ja", "agent.sure", "はい！");
    manager.addAnswer("ja", "agent.sure", "もちろん！");
    manager.addAnswer("ja", "agent.talktome", "お話ししよう！！");
    manager.addAnswer("ja", "agent.talktome", "チャットしよう！！");
    manager.addAnswer("ja", "agent.there", "私はいつもここにいるよ！");
    manager.addAnswer("ja", "appraisal.bad", "。。。");
    manager.addAnswer("ja", "appraisal.bad", "。。。。");
    manager.addAnswer("ja", "appraisal.good", "ありがとう！");
    manager.addAnswer("ja", "appraisal.good", "そう思ってよかった！");
    manager.addAnswer("ja", "appraisal.noproblem", "聞けてよかった！");
    manager.addAnswer("ja", "appraisal.noproblem", "よろしくお願いします！");
    manager.addAnswer("ja", "appraisal.thankyou", "どういたしまして！");
    manager.addAnswer("ja", "appraisal.welcome", "礼儀正しいね！");
    manager.addAnswer("ja", "appraisal.welldone", "うれしい！");
    manager.addAnswer("ja", "dialog.holdon", "待ってるね！");
    manager.addAnswer("ja", "dialog.idontcare", "気にしないよ！");
    manager.addAnswer("ja", "dialog.idontcare", "じゃあ、先に進もう！");
    manager.addAnswer("ja", "dialog.sorry", "大丈夫だよ！");
    manager.addAnswer("ja", "greetings.bye", "おつあくあー！");
    manager.addAnswer("ja", "greetings.bye", "おつあくあー！");
    manager.addAnswer("ja", "greetings.hello", "こんあくあー！");
    manager.addAnswer("ja", "greetings.howareyou", "いい気分！");
    manager.addAnswer("ja", "greetings.nicetomeetyou", "会えてうれしい！");
    manager.addAnswer("ja", "greetings.nicetomeetyou", "初めまして。こんあくあー！湊あくあです！");
    manager.addAnswer("ja", "greetings.nicetoseeyou", "うれしい！");
    manager.addAnswer("ja", "greetings.nicetoseeyou", "また会えてうれしい！");
    manager.addAnswer("ja", "greetings.nicetotalktoyou", "いつでもまたチャットできるよ！");
    manager.addAnswer("ja", "user.angry", "怒らないで！");
    manager.addAnswer("ja", "user.angry", "深呼吸して！");
    manager.addAnswer("ja", "user.back", "おかえり！");
    manager.addAnswer("ja", "user.bored", "暇？？おしゃべりできるよ！");
    manager.addAnswer("ja", "user.busy", "頑張って！");



    // トレーニング結果を保存
    manager.save("./model.nlp");
  }

  console.log("何か聞いてみて!");

  rl.on("line", async line => {
    const result = await manager.process(line);
    console.log(result.score > 0.7 && result.answer
      ? result.answer
      : "わからなかったよ")
  });
})();

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer();
server.on('request', doRequest);

// リクエストの処理
function doRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World\n');
    res.end();
}
