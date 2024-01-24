const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`==== Logged in: ${client.user.tag} ====`);
  client.user.setPresence({ activity: { name: "げーむ" } });
});

const messageReplies = {
    //星5
    "ナヴィア": "\n【メインステータス】\n時の砂：攻撃力\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心ダメージ/会心率/攻撃力\n普：元素チャージ効率",
    "荒瀧一斗": "\n【メインステータス】\n時の：防御力\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心ダメージ/会心率/防御力\n普：元素チャージ効率/攻撃力",
    "主人公(岩)": "\n【メインステータス】\n時の砂：攻撃%\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率/会心ダメージ/会心率\n普：攻撃力",
    "アルベド": "\n【メインステータス】\n時の砂：防御力\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ/防御力\n【サブステータス】\n良：会心ダメージ/会心率/防御力\n普：攻撃力",
    "鍾離": "\n【メインステータス】\n時の砂：攻撃力%/チャージ/HP%\n空の杯：会心率/会心ダメ\n理の冠：会心率/会心ダメ/防御力\n【サブステータス】\n良：会心ダメージ/会心率/元素チャージ効率\n普：攻撃力/HP",
    "珊瑚宮心海":"\n【メインステータス】\n時の砂：HP/元素熟知\n空の杯：HP/水ダメ\n理の冠：治癒効果\n【サブステータス】\n良：HP/元素熟知\n普：攻撃力/元素チャージ効率",
    "主人公(水)":"\n【メインステータス】\n時の砂：HP\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：HP/会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "フリーナ":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP/水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/HP\n普：元素チャージ効率/元素熟知",
    "ヌヴィレット":"\n【メインステータス】\n時の砂：HP\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/HP\n普：元素チャージ効率/元素熟知",
    "ニィロウ":"\n【メインステータス】\n時の砂：HP\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/元素熟知\n普：会心率/会心ダメ/元素チャージ効率",
    "夜蘭":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/HP/元素熟知\n普：元素熟知",
    "神里綾人":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：HP/元素チャージ効率/元素熟知",
    "タルタリヤ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "モナ":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/元素チャージ効率\n普：元素熟知/攻撃力",
    "七七":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：攻撃力\n理の冠：治療効果\n【サブステータス】\n良：攻撃力/元素チャージ効率\n普：会心率/会心ダメ",
    "甘雨":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素熟知\n普：元素チャージ効率",
    "リオセスリ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "申鶴":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：攻撃力\n理の冠：攻撃力\n【サブステータス】\n良：攻撃力/元素チャージ効率\n普：会心率/会心ダメ",
    "アーロイ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ\n普：攻撃力/元素チャージ効率/元素熟知",
    "エウルア":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：物理ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    "神里綾華":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "リネ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "胡桃":"\n【メインステータス】\n時の砂：HP/元素熟知\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/HP/元素熟知\n普：攻撃力/元素チャージ効率",
    "クレー":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "ディシア":"\n【メインステータス】\n時の砂：攻撃力/HP\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/HP\n普：元素チャージ効率/元素熟知",
    "ディルック":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "宵宮":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素熟知",
    //"閑雲":"",
    "アルハイゼン":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：草ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素熟知/会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    "ナヒーダ":"\n【メインステータス】\n時の砂：元素熟知\n空の杯：草ダメ/元素熟知\n理の冠：会心率/元素熟知\n【サブステータス】\n良：元素熟知/会心率/会心ダメ\n普：攻撃力/元素チャージ効率",
    "ティナリ":"\n【メインステータス】\n時の砂：元素熟知\n空の杯：草ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素熟知\n普：元素チャージ効率",
    "主人公(草)":"\n【メインステータス】\n時の砂：元素チャージ効率/元素熟知\n空の杯：草ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率/会心率/会心ダメ\n普：攻撃力/元素熟知",
    "白朮":"\n【メインステータス】\n時の砂：元素チャージ効率/HP\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/元素チャージ効率\n普：元素熟知/攻撃力/会心率/会心ダメ",
    "雷電将軍":"\n【メインステータス】\n時の砂：チャージ\n空の杯：攻撃力/雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率/会心率/会心ダメ\n普：攻撃力/元素熟知",
    "セノ":"\n【メインステータス】\n時の砂：元素熟知/攻撃力\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/元素熟知/攻撃力\n普：元素チャージ効率",
    "主人公(雷)":"\n【メインステータス】\n時の砂：元素チャージ効率/元素熟知\n空の杯：雷ダメ/元素熟知\n理の冠：会心率/会心ダメ/元素熟知\n【サブステータス】\n良：会心率/会心ダメ/元素チャージ効率/元素熟知\n普：攻撃力",
    "刻晴":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "八重神子":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素熟知\n普：元素チャージ効率",
    "放浪者":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "ジン":"\n【メインステータス】\n時の砂：元素チャージ効率/元素熟知/攻撃力\n空の杯：風ダメ/元素熟知/攻撃力\n理の冠：会心率/会心ダメ/元素熟知\n【サブステータス】\n良：攻撃力/元素チャージ効率\n普：元素熟知/会心率/会心ダメ",
    "主人公(風)":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素熟知/会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    "ウェンティ":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：風ダメ/元素熟知\n理の冠：会心率/会心ダメ/元素熟知\n【サブステータス】\n良：元素熟知/攻撃力\n普：会心率/会心ダメ/元素チャージ効率",
    "楓原万葉":"\n【メインステータス】\n時の砂：元素熟知\n空の杯：元素熟知\n理の冠：元素熟知\n【サブステータス】\n良：元素熟知/元素チャージ効率\n普：会心率/会心ダメ/攻撃力",
    "魈":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    //星4
    "凝光":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    "ゴロー":"\n【メインステータス】\n時の砂：防御力/元素チャージ効率\n空の杯：防御力/岩ダメ\n理の冠：会心率/防御力\n【サブステータス】\n良：元素チャージ効率/防御力\n普：会心率/会心ダメ",
    "雲菫":"\n【メインステータス】\n時の砂：防御力/元素チャージ効率\n空の杯：防御力\n理の冠：防御力\n【サブステータス】\n良：元素チャージ効率/防御力\n普：会心率/会心ダメ",
    "ノエル":"\n【メインステータス】\n時の砂：防御力\n空の杯：岩ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：防御力/会心率/会心ダメ\n普：攻撃力/元素チャージ効率",
    "行秋":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：水ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/元素チャージ効率\n普：攻撃力/元素熟知",
    "バーバラ":"\n【メインステータス】\n時の砂：HP\n空の杯：HP\n理の冠：治療効果\n【サブステータス】\n良：HP/元素チャージ効率\n普：防御力",
    "キャンディス":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP\n理の冠：HP/会心率\n【サブステータス】\n良：HP/元素チャージ効率\n普：攻撃力/元素熟知/会心率/会心ダメ",
    "ロサリア":"\n【メインステータス】\n時の砂：攻撃力/元素チャージ効率\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "ディオナ":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/元素チャージ効率\n普：防御力",
    "ガイア":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率",
    "ミカ":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP\n理の冠：治療効果/会心率\n【サブステータス】\n良：HP/元素チャージ効率/会心率\n普：会心ダメ/攻撃力",
    "レイラ":"\n【メインステータス】\n時の砂：HP\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/会心率/会心ダメ\n普：攻撃力/元素チャージ効率",
    "シャルロット":"\n【メインステータス】\n時の砂：攻撃力/元素チャージ効率\n空の杯：攻撃力/氷ダメ\n理の冠：会心率/会心ダメ/治療効果\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "フレミネ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：物理ダメ/氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "重雲":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：氷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素熟知\n普：元素チャージ効率",
    "トーマ":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP/元素熟知\n理の冠：HP/元素熟知\n【サブステータス】\n良：HP/元素チャージ効率/元素熟知\n普：会心率/会心ダメ/攻撃力",
    "シュヴルーズ":"\n【メインステータス】\n時の砂：HP\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "香菱":"\n【メインステータス】\n時の砂：攻撃力/元素チャージ効率\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/v\n普：攻撃力/元素熟知",
    "辛炎":"\n【メインステータス】\n時の砂：攻撃力/防御力\n空の杯：物理ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/防御力\n普：元素チャージ効率",
    "アンバー":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素チャージ効率\n普：元素熟知",
    "煙緋":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：炎ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "ベネット":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：HP\n理の冠：HP/治療効果\n【サブステータス】\n良：HP/元素チャージ効率\n普：会心率/会心ダメ/元素熟知",
    //"嘉明":"",
    "綺良々":"\n【メインステータス】\n時の砂：HP\n空の杯：HP\n理の冠：HP\n【サブステータス】\n良：HP/攻撃力/会心率/会心ダメ\n普：元素チャージ効率/元素熟知",
    "ヨォーヨ":"\n【メインステータス】\n時の砂：HP/元素チャージ効率\n空の杯：HP\n理の冠：治療効果/HP\n【サブステータス】\n良：HP/元素チャージ効率\n普：元素熟知/会心率/会心ダメ/攻撃力",
    "カーヴェ":"\n【メインステータス】\n時の砂：元素チャージ効率/元素熟知\n空の杯：元素熟知\n理の冠：元素熟知\n【サブステータス】\n良：元素チャージ効率/元素熟知\n普：攻撃力/会心率/会心ダメ/HP",
    "コレイ":"\n【メインステータス】\n時の砂：攻撃力/元素チャージ効率/元素熟知\n空の杯：草ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力/元素チャージ効率\n普：元素熟知",
    "レザー":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：物理ダメ/元素熟知\n理の冠：会心率/会心ダメ/元素熟知\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "北斗":"\n【メインステータス】\n時の砂：攻撃力/元素チャージ効率\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/元素チャージ効率\n普：攻撃力/元素熟知",
    "フィッシュル":"\n【メインステータス】\n時の砂：攻撃力/元素熟知\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素チャージ効率/元素熟知",
    "ドリー":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：HP\n理の冠：治療効果\n【サブステータス】\n良：HP/元素チャージ効率\n普：会心率/会心ダメ/攻撃力/元素熟知",
    "久岐忍":"\n【メインステータス】\n時の砂：元素熟知\n空の杯：元素熟知\n理の冠：元素熟知\n【サブステータス】\n良：HP/元素熟知\n普：会心率/会心ダメ/攻撃力/元素チャージ効率",
    "リサ":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ\n普：攻撃力/元素チャージ効率/元素熟知",
    "九条裟羅":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：雷ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率\n普：会心率/会心ダメ/攻撃力",
    "ファルザン":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率/会心率/攻撃力\n普：会心ダメ/元素熟知",
    "鹿野院平蔵":"\n【メインステータス】\n時の砂：攻撃力\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：会心率/会心ダメ/攻撃力\n普：元素熟知",
    "スクロース":"\n【メインステータス】\n時の砂：元素熟知\n空の杯：元素熟知\n理の冠：元素熟知\n【サブステータス】\n良：元素チャージ効率/元素熟知\n普：会心率/会心ダメ/攻撃力",
    "リネット":"\n【メインステータス】\n時の砂：元素チャージ効率\n空の杯：風ダメ\n理の冠：会心率/会心ダメ\n【サブステータス】\n良：元素チャージ効率/会心率/会心ダメ/攻撃力\n普：元素熟知",
    "早柚":"\n【メインステータス】\n時の砂：元素熟知/攻撃力/元素チャージ効率\n空の杯：元素熟知/攻撃力\n理の冠：元素熟知/治療効果\n【サブステータス】\n良：元素熟知/攻撃力\n普：元素チャージ効率/会心率/会心ダメ"
};

const messageReplies1 = {
    //星5
    "ナヴィア": "\n🟠裁断\n🟠葦海の標\n🟠狼の末路\n🟣無工の剣\n🟣螭龍の剣\n🟣祭礼の大剣\n🟣タイダル・シャドー",
    "荒瀧一斗": "\n🟠赤角石塵滅砕\n🟣白影の剣\n🟠天空の傲\n🟣螭龍の剣\n🔵鉄影段平",
    "主人公(岩)": "\n🟠天空の刃\n🟣祭礼の剣\n🟠磐岩結緑\n🟣西風剣\n🟣腐植の剣\n🟠霧切の廻光\n🟣サーンドルの渡し守",
    "アルベド": "\n🟣シナバースピンドル\n🔵黎明の神剣\n🟣狼牙\n🟠磐岩結緑",
    "鍾離": "\n🟣西風長槍\n🔵黒纓槍\n🟣正義の報酬",
    "珊瑚宮心海":"\n🔵龍殺しの英傑譚\n🟣祭礼の断片\n🟠千夜に浮かぶ夢\n🟠不滅の月華\n🟣金珀・試作",
    "主人公(水)":"\n🟠磐岩結緑\n🟣腐植の剣\n🟣サーンドルの渡し守\n🟣海淵のフィナーレ\n🟣狼牙\n🟣祭礼の剣",
    "フリーナ":"\n🟠静水流転の輝き\n🟠磐岩結緑\n🟣腐植の剣\n🟠聖顕の鍵\n🟣サーンドルの渡し守\n🟣西風剣",
    "ヌヴィレット":"\n🟠久遠流転の大典\n🟣古祠の瓏\n🟠四風原典\n🟣流浪楽章\n🟣金珀・試作",
    "ニィロウ":"\n🟠聖顕の鍵\n🟣船渠剣\n🟠蒼古なる自由への誓い\n🟣サイフォスの月明かり\n🟠磐岩結緑\n🟣鉄蜂の刺し",
    "夜蘭":"\n🟠若水\n🟣祭礼の弓\n🟣西風猟弓\n🟠終焉を嘆く詩\n🟣絶弦\n🔵リカーブボウ",
    "神里綾人":"\n🟠波乱月白経津\n🟠霧切の廻光\n🟠磐岩結緑\n🟣黒剣\n🟣海淵のフィナーレ\n🔵黎明の神剣",
    "タルタリヤ":"\n🟠冬極の白星\n🟠飛雷の鳴弦\n🟠若水\n🟠天空の翼\n🟣弓蔵\n🟣絶弦\n🟣静寂の唄\n🟣破魔の弓\n🟣蒼翠の狩猟弓",
    "モナ":"\nメインアタッカー\n🟠四風原典\n🟣匣中日月\n\nサブアタッカー\n🟣流浪楽章\n🟠天空の巻\n\nサポート\n🔵龍殺しの英傑譚\n🟣西風秘典",
    "七七":"\n🟠波乱月白経津\n🟠風鷹剣\n🟠磐岩結緑\n🟣海淵のフィナーレ\n🟣斬岩・試作",
    "甘雨":"\n🟠アモスの弓\n🟠始まりの大魔術\n🟠狩人の道\n🟠天空の翼\n🟠冬極の白星\n🟣烈日の後嗣\n🟣破魔の弓",
    "リオセスリ":"\n🟠凛流の監視者\n🟠トゥライトゥーラの記憶\n🟠四風原典\n🟠久遠流転の大典\n🟣流浪楽章\n🟣果てなき紺碧の唄\n🟠浮世の錠\n🟣純水流華\n🟣ドドコの物語\n🟣冬忍びの実",
    "申鶴":"\n🟠息災\n🟠草薙の稲光\n🟠破天の槍\n🟠和璞鳶\n🟠天空の脊\n🟣西風長槍\n🟣斬波のひれ長",
    "アーロイ":"\n🟠若水\n🟠飛雷の鳴弦\n🟠天空の翼\n🟣弓蔵\n🟠冬極の白星\n🟣破魔の弓\n🟣静寂の唄\n🟣蒼翠の狩猟弓\n🟣プレデター",
    "エウルア":"\n🟠松韻の響く頃\n🟠狼の末路\n🟣惡王丸\n🟠無工の剣\n🟣螭龍の剣\n🟣タイダル・シャドー\n🟣雪葬の星銀\n🟣古華・試作",
    "神里綾華":"\n🟠霧切の廻光\n🟠磐岩結緑\n🟠波乱月白経津\n🟣海淵のフィナーレ\n🔵黎明の神剣\n🟣黒剣",
    "リネ":"\n🟠始まりの大魔術\n🟠若水\n🟠天空の翼\n🟠アモスの弓\n🟣烈日の後嗣\n🟣破魔の弓",
    "胡桃":"\n🟠護摩の杖\n🟠和璞鳶\n🟠赤砂の杖\n🟣千岩長槍\n🟣死闘の槍\n🟣フィヨルドの歌\n🟣匣中滅龍\n🔵黒纓槍",
    "クレー":"\n🟠四風原典\n🟣流浪楽章\n🟠神楽の真意\n🟠浮世の錠\n🟠天空の巻\n🟣ドドコの物語\n🟣純水流華",
    "ディシア":"\n🟠葦海の標\n🟠狼の末路\n🟠赤角石塵滅砕\n🟣螭龍の剣\n🟣携帯型チェーンソー\n🟣鉄彩の花\n🟣雨裁\n🟣マカイラの水色\n🟣西風大剣\n🟣桂木斬長正\n🟣タイダル・シャドー\n🟣鐘の剣",
    "ディルック":"\n🟠葦海の標\n🟠狼の末路\n🟠赤角石塵滅砕\n🟣螭龍の剣\n🟣タイダル・シャドー\n🟣鉄彩の花\n🟣マカイラの水色\n🟣雨裁\n🟣祭礼の大剣",
    "宵宮":"\n🟠飛雷の鳴弦\n🟠若水\n🟠天空の翼\n🟠アモスの弓\n🟣弓蔵\n🟣破魔の弓",
    //"閑雲":"",
    "アルハイゼン":"\n🟠萃光の裁葉\n🟠磐岩結緑\n🟠霧切の廻光\n🟠波乱月白経津\n🟣黒剣\n🟣狼牙\n🔵黎明の神剣\n🟣鉄蜂の刺し\n🟣サイフォスの月明かり\n🟣東花坊時雨",
    "ナヒーダ":"\n🟠千夜に浮かぶ夢\n🟠神楽の真意\n🔵魔導緒論\n🟣彷徨える星\n🟣祭礼の断片\n🟣金珀・試作",
    "ティナリ":"\n🟠狩人の道\n🟠アモスの弓\n🟠始まりの大魔術\n🟠冬極の白星\n🟣烈日の後嗣\n🟣破魔の弓",
    "主人公(草)":"\n🟠蒼古なる自由への誓い\n🟣祭礼の剣\n🟣西風剣\n🟠磐岩結緑\n🟣サイフォスの月明かり\n🟣鉄蜂の刺し\n🟣東花坊時雨\n🟣腐植の剣\n🟣サーンドルの渡し守",
    "白朮":"\n🟠碧落の瓏\n🟣古祠の瓏\n🟣金珀・試作\n🔵龍殺しの英傑譚\n🟠不滅の月華",
    "雷電将軍":"\n🟠草薙の稲光\n🟠護摩の杖\n🟣匣中滅龍\n🟣斬波のひれ長\n🟣漁獲\n🟠天空の脊\n🟣西風長槍\n🟣喜多院十文字槍",
    "セノ":"\n🟠赤砂の杖\n🟠和璞鳶\n🟣フィヨルドの歌\n🔵白纓槍\n🟣死闘の槍\n🟣風信の矛\n🟣星鎌・試作",
    "主人公(雷)":"\n🟠蒼古なる自由への誓い\n🟣祭礼の剣\n🟣西風剣\n🟠天空の刃\n🟠磐岩結緑\n🟣サイフォスの月明かり\n🟣原木刀",
    "刻晴":"\n🟠霧切の廻光\n🟠磐岩結緑\n🟠波乱月白経津\n🟣匣中龍吟\n🟣狼牙\n🔵黎明の神剣\n🟣黒剣\n🟣海淵のフィナーレ\n🔵暗鉄剣",
    "八重神子":"\n🟠神楽の真意\n🟣流浪楽章\n🟠千夜に浮かぶ夢\n🟠天空の巻\n🟣万国諸海の図譜\n🟣匣中日月",
    "放浪者":"\n🟠トゥライトゥーラの記憶\n🟣流浪楽章\n🟠天空の巻\n🟠四風原典\n🟣匣中日月\n🟣純水流華",
    "ジン":"\n🟠磐岩結緑\n🟠天空の刃\n🟣西風剣\n🟣腐植の剣\n🟣天目影打\n🟣狼牙\n🟣サーンドルの渡し守",
    "主人公(風)":"\n🟠蒼古なる自由への誓い\n🟠磐岩結緑\n🟠天空の刃\n🟣祭礼の剣\n🟣西風剣\n🟣腐植の剣\n🟣狼牙\n🟠霧切の廻光\n🟣サーンドルの渡し守",
    "ウェンティ":"\n🟠終焉を嘆く詩\n🟠冬極の白星\n🟠若水\n🟠天空の翼\n🟣西風猟弓\n🟣ダークアレイの狩人\n🟣曚雲の月\n🟣絶弦",
    "楓原万葉":"\n🟠蒼古なる自由への誓い\n🟣サイフォスの月明かり\n🟣鉄蜂の刺し\n🟣祭礼の剣\n🟣西風剣",
    "魈":"\n🟠護摩の杖\n🟠和璞鳶\n🟠赤砂の杖\n🟣千岩長槍\n🟣死闘の槍\n🟣星鎌・試作",
    //星4
    "凝光":"\n🟠神楽の真意\n🟠浮世の錠\n🟠四風原典\n🟣流浪楽章\n🟠天空の巻\n🟣匣中日月\n🟣ドドコの物語",
    "ゴロー":"\n🟠終焉を嘆く詩\n🟣祭礼の弓\n🟣西風猟弓",
    "雲菫":"\n🟠草薙の稲光\n🟣西風長槍\n🟠天空の脊\n🟣漁獲\n🟣喜多院十文字槍",
    "ノエル":"\n🟠赤角石塵滅砕\n🟣白影の剣\n🟠天空の傲\n🟣螭龍の剣",
    "行秋":"\n🟣祭礼の剣\n🟠磐岩結緑\n🟣サーンドルの渡し守\n🟠蒼古なる自由への誓い\n🟣西風剣\n🟣狼牙\n🟣原木刀",
    "バーバラ":"\n🔵龍殺しの英傑譚\n🟣金珀・試作\n🟠不滅の月華",
    "キャンディス":"\n🟠草薙の稲光\n🟠護摩の杖\n🟣正義の報酬\n🔵黒纓槍\n🟣西風長槍\n🟠天空の脊\n🟣星鎌・試作",
    "ロサリア":"\n🟠草薙の稲光\n🟣西風長槍\n🟠天空の脊\n🟠和璞鳶\n🟠護摩の杖\n🟣斬波のひれ長\n🟣ドラゴンスピア\n🔵黒纓槍",
    "ディオナ":"\n🟣祭礼の弓\n🟠終焉を嘆く詩\n🟣西風猟弓\n🔵リカーブボウ",
    "ガイア":"\n🟠磐岩結緑\n🟣西風剣\n🟣狼牙\n🟣海淵のフィナーレ\n🟠天空の刃\n🔵黎明の神剣\n🟣天目影打\n🔵冷刃",
    "ミカ":"\n🟣西風長槍\n🟣正義の報酬\n🔵黒纓槍\n🟣星鎌・試作",
    "レイラ":"\n🟣西風剣\n🟠聖顕の鍵\n🟠磐岩結緑\n🟣船渠剣\n🔵黎明の神剣\n🟣腐植の剣\n🟣サーンドルの渡し守",
    "シャルロット":"\n🟣誓いの明瞳\n🟣西風秘典\n🟣金珀・試作\n🟣純水流華\n🟣祭礼の断片\n🔵龍殺しの英傑譚",
    "フレミネ":"\n🟠松韻の響く頃\n🟠狼の末路\n🟣螭龍の剣\n🟠葦海の標\n🟣桂木斬長正\n🟣雪葬の星銀\n🟣タイダル・シャドー\n🟣黒岩の斬刀\n🟣古華・試作\n🔵飛天大御剣",
    "重雲":"\n🟠葦海の標\n🟠狼の末路\n🟣祭礼の大剣\n🟣千岩古剣\n🟣螭龍の剣\n🟣古華・試作\n🔵理屈責め",
    "トーマ":"\n🟣西風長槍\n🔵黒纓槍\n🟣正義の報酬\n🟣匣中滅龍\n🟣喜多院十文字槍\n🟣ムーンピアサー\n🟣フィヨルドの歌",
    "シュヴルーズ":"\n🟠護摩の杖\n🟣正義の報酬\n🔵黒纓槍\n🟣西風長槍",
    "香菱":"\n🟠赤砂の杖\n🟠草薙の稲光\n🟣漁獲\n🟠天空の脊\n🟠護摩の杖\n🟣斬波のひれ長\n🟣匣中滅龍\n🟣フィヨルドの歌\n🟣喜多院十文字槍\n🟣星鎌・試作",
    "辛炎":"\n🟠松韻の響く頃\n🟠狼の末路\n🟠赤角石塵滅砕\n🟣西風大剣\n🟣千岩古剣\n🟣螭龍の剣\n🟣白影の剣\n🟣話死合い棒",
    "アンバー":"\n🟠冬極の白星\n🟠天空の翼\n🔵弾弓\n🔵シャープシューターの誓い",
    "煙緋":"\n🟠四風原典\n🟣流浪楽章\n🟠浮世の錠\n🟠天空の巻\n🟣ドドコの物語\n🟣黒岩の緋玉",
    "ベネット":"\n🟠霧切の廻光\n🟠風鷹剣\n🟠天空の刃\n🟣ダークアレイの閃光\n🟣西風剣\n🟣原木刀",
    //"嘉明":"",
    "綺良々":"\n🟠聖顕の鍵\n🟠磐岩結緑\n🟣船渠剣\n🟣西風剣\n🟣祭礼の剣",
    "ヨォーヨ":"\n🟣西風長槍\n🟣正義の報酬\n🔵黒纓槍\n🟣喜多院十文字槍\n🟣ムーンピアサー",
    "カーヴェ":"\n🟣マカイラの水色\n🟣西風大剣\n🟣祭礼の大剣\n🟣鉄彩の花\n🟣森林のレガリア\n🟣雨裁",
    "コレイ":"\n🟠終焉を嘆く詩\n🟣祭礼の弓\n🟣西風猟弓\n🟣絶弦\n🟣静寂の唄\n🟣竭沢",
    "レザー":"\n🟠狼の末路\n🟠松韻の響く頃\n🟠葦海の標\n🟣螭龍の剣\n🟣タイダル・シャドー\n🟣鉄彩の花\n🟣雨裁\n🟣マカイラの水色\n🔵龍血を浴びた剣\n🔵飛天大御剣",
    "北斗":"\n🟠狼の末路\n🟠天空の傲\n🟣惡王丸\n🟣西風大剣\n🟣千岩古剣\n🟣鉄彩の花\n🟣雨裁\n🟣マカイラの水色\n🔵龍血を浴びた剣",
    "フィッシュル":"\n🟠若水\n🟠冬極の白星\n🟠天空の翼\n🟠終焉を嘆く詩\n🟣絶弦\n🟣ダークアレイの狩人\n🟣静寂の唄\n🟣幽夜のワルツ\n🟣リングボウ",
    "ドリー":"\n🟣祭礼の大剣\n🟣携帯型チェーンソー\n🟣西風大剣\n🟣森林のレガリア\n🟣桂木斬長正",
    "久岐忍":"\n🟠聖顕の鍵\n🟣船渠剣\n🟠蒼古なる自由への誓い\n🟣鉄蜂の刺し\n🟣サイフォスの月明かり\n🟣東花坊時雨\n🟣原木刀\n🔵暗鉄剣",
    "リサ":"\nメイン火力\n🟠四風原典\n🟠天空の巻\n\nサブ火力\n🟠神楽の真意\n🟣流浪楽章\n🟣匣中日月\n🟣満悦の実\n🔵魔導緒論",
    "九条裟羅":"\n🟠終焉を嘆く詩\n🟠天空の翼\n🟣祭礼の弓\n🟣曚雲の月\n🟣ダークアレイの狩人\n🟣落霞",
    "ファルザン":"\n🟣西風猟弓\n🟠終焉を嘆く詩",
    "鹿野院平蔵":"\n🟠四風原典\n🟣流浪楽章\n🟠神楽の真意\n🟣匣中日月\n🟠天空の巻\n🟣祭礼の断片\n🟣万国諸海の図譜",
    "スクロース":"\n🟠千夜に浮かぶ夢\n🟣祭礼の断片\n🟣彷徨える星\n🔵龍殺しの英傑譚\n🟣流浪楽章\n🟣白辰の輪",
    "リネット":"\n🟠蒼古なる自由への誓い\n🟣祭礼の剣\n🟣西風剣\n🟠天空の刃\n🟣腐植の剣\n🟣サーンドルの渡し守\n🟣海淵のフィナーレ\n🟣狼牙",
    "早柚":"\n🟠狼の末路\n🟣マカイラの水色\n🟣西風大剣\n🟣桂木斬長正\n🔵龍血を浴びた剣\n🟣雨裁\n🟣鉄彩の花"
};
//スラッシュコマンド
client.on('interactionCreate', async interaction => { //メッセージを受け取ったら
    if (!interaction.isCommand()) return; //コマンド以外は無視

    const { commandName } = interaction;
    console.log(`==== command: ${commandName} ====`);
  
  if (/ステータス/.test(commandName)) {
    // "ステータス" を含む処理
    const characterstatus = interaction.options.getString('character');
    const characterName = characterstatus.replace(" ステータス", "");
    console.log(`==== ステータスキャラ: ${characterName} ====`);
    
    if (commandName === `炎キャラのステータス`) {
      if (characterName in messageReplies) {
        if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '岩キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '水キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '草キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '氷キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '風キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    } else if (commandName === '雷キャラのステータス') {
        if (characterName in messageReplies) {
          if (messageReplies.hasOwnProperty(characterName)) {
          const characterStats = messageReplies[characterName];
            await interaction.reply(`${characterName}のステータス\n${characterStats}`);
          } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
          }
      } else {
            await interaction.reply(`${characterName}のステータスは登録されていません。`);
      }
    }
    
} else if (/武器/.test(commandName)) {
    // "武器" を含む処理
    const armsstatus = interaction.options.getString('arms');
    const armsName = armsstatus.replace(" 武器", "");
    console.log(`==== 武器キャラ: ${armsName} ====`);
    
    if (commandName === `炎キャラの武器`) {
      if (armsName in messageReplies) {
        if (messageReplies.hasOwnProperty(armsName)) {
        const characterStats = messageReplies[armsName];
          await interaction.reply(`${armsName}の武器\n${characterStats}`);
        } else {
          await interaction.reply(`${armsName}の武器は登録されていません。`);
        }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '岩キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
        }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '水キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
          }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '草キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
          }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '氷キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
          }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '風キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
          }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    } else if (commandName === '雷キャラの武器') {
        if (armsName in messageReplies) {
          if (messageReplies.hasOwnProperty(armsName)) {
          const characterStats = messageReplies[armsName];
            await interaction.reply(`${armsName}の武器\n${characterStats}`);
          } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
          }
      } else {
            await interaction.reply(`${armsName}の武器は登録されていません。`);
      }
    }
    
} else {
    // 上記以外のコマンド名の処理
    await interaction.reply("予期せぬ不具合が発生しました。");
}
    
    
});

//Botメンション
client.on("messageCreate", (message) => {
  console.log(`▶ [${message.author.tag}] ${message.content}`);
  if (message.mentions.users.has(client.user.id)) {
    message.reply("Hi!");
    return;
  }
  
//ステータス
const content = message.content;
const statusKeywords = [" ステータス", "　ステータス", "のステータス"]; // 半角スペースと全角スペース

for (const keyword of statusKeywords) {
  if (content.endsWith(keyword)) {
    const baseContent = content.slice(0, -keyword.length).trim();
    if (messageReplies.hasOwnProperty(baseContent)) {
      const reply_text = messageReplies[baseContent];
      message.reply(reply_text)
        .then((message) => console.log("Sent message: " + reply_text))
        .catch(console.error);
      break;
    }
  }
}
  
//武器
const content1 = message.content;
const statusKeywords1 = [" 武器", "　武器", "の武器"]; // 半角スペースと全角スペース

for (const keyword of statusKeywords1) {
  if (content1.endsWith(keyword)) {
    const baseContent = content1.slice(0, -keyword.length).trim();
    if (messageReplies1.hasOwnProperty(baseContent)) {
      const reply_text = messageReplies1[baseContent];
      message.reply(reply_text)
        .then((message) => console.log("Sent message: " + reply_text))
        .catch(console.error);
      break; // 一致したらループを抜ける
    }
  }
}
  
  
  
});

client.login(process.env.DISCORD_BOT_TOKEN);
