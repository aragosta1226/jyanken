//
//data.js スプライトデータとか
//

// 敵マスター
class TekiMaster { 
    constructor(tnum, r, hp, score, ) {
        this.tnum = tnum;
        this.r = r;
        this.hp = hp;
        this.score = score;
    }
}

let tekiMaster = [
    new TekiMaster(0, 10,    1,  100),//0,ピンクひよこ
    new TekiMaster(1, 10,    1,  100),//1,黄色ひよこ
    new TekiMaster(2, 70, 5000,10000),//2,ボスひよこ(黄色)
    new TekiMaster(3, 10,    1,   10),//3,ボスひよこ(黄色)の子供
];

// スプライトクラス
class Sprite {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

// スプライト
let sprite = [
    new Sprite(14, 5, 22, 42),//0,自機 左２
    new Sprite(37, 5, 33, 42),//1,自機 左1
    new Sprite(71, 5, 43, 42),//2,自機 正面
    new Sprite(115,5, 33, 42),//3,自機 右1
    new Sprite(149,5, 21, 42),//4,自機 右2

    new Sprite( 14,55, 3,  7),//5,弾1
    new Sprite( 18,55, 5,  5),//6,弾2

    new Sprite( 17,47, 12, 5),//7,噴射 左2
    new Sprite( 44,47, 18, 5),//8,噴射 左1
    new Sprite( 83,47, 19, 5),//9,噴射 正面
    new Sprite(123,47, 18, 5),//10,噴射 右1
    new Sprite(155,47, 12, 5),//11,噴射 右2

    new Sprite( 26,56,  6, 5),//12,敵弾1-1
    new Sprite( 34,56,  5, 5),//13,敵弾1-2
    new Sprite( 46,54,  8, 8),//14,敵弾2-1
    new Sprite( 56,52, 12,12),//15,敵弾2-2

    new Sprite(18,356, 10,10),//16,爆発1
    new Sprite(35,351, 21,21),//17,爆発2
    new Sprite(60,348, 29,26),//18,爆発3
    new Sprite(94,348, 32,30),//19,爆発4
    new Sprite(131,345,37,33),//20,爆発5
    new Sprite(168,345,35,33),//21,爆発6
    new Sprite(203,348,27,28),//22,爆発7
    new Sprite(232,354,16,16),//23,爆発8
    new Sprite(255,355,15,14),//24,爆発9
    new Sprite(273,355,14,13),//25,爆発10
    new Sprite(290,355,14,14),//26,爆発11

    new Sprite(  6,373, 9, 9),//27,ヒット1
    new Sprite( 19,371,16,15),//28,ヒット2
    new Sprite( 38,373,11,12),//29,ヒット3
    new Sprite( 54,372,17,17),//30,ヒット4
    new Sprite( 75,374,13,14),//31,ヒット5

    new Sprite( 99,276,17,27),//32,エル君1

    new Sprite(134,273,24,29),//33,あいちゃん1

    new Sprite( 54,268,25,35),//34,マシュー爺さん1

    new Sprite(170,272,27,34),//35,マコちゃん1

    new Sprite( 13,270,22,34),//36,よつおくん

    new Sprite(214,271,27,35),//37,チャーリー1

    new Sprite( 4, 95, 24,26),//38,ピンク1
    new Sprite( 36, 95,24,26),//39,ピンク2
    new Sprite( 68, 95,24,26),//40,ピンク3
    new Sprite(100, 95,24,26),//41,ピンク4
    new Sprite(133, 92,24,29),//42,ピンク5
    new Sprite(161, 95,30,26),//43,ピンク6

    new Sprite( 4,125, 24,29),//44,青グラサン1
    new Sprite( 36,125,24,29),//45,青グラサン2
    new Sprite( 68,125,24,29),//46,青グラサン3
    new Sprite(100,125,24,29),//47,青グラサン4
    new Sprite(133,124,24,30),//48,青グラサン5
    new Sprite(161,125,30,29),//49,青グラサン6

    new Sprite( 4,160, 25,27),//50,ロボ1
    new Sprite( 34,160,26,27),//51,ロボ2
    new Sprite( 66,160,26,27),//52,ロボ3
    new Sprite( 98,160,26,27),//53,ロボ4
    new Sprite(132,160,26,27),//54,ロボ5
    new Sprite(161,158,30,29),//55,ロボ6

    new Sprite( 4,194, 24,28),//56,ニワトリ1
    new Sprite( 36,194,24,28),//57,ニワトリ2
    new Sprite( 68,194,24,28),//58,ニワトリ3
    new Sprite(100,194,24,28),//59,ニワトリ4
    new Sprite(133,194,24,30),//60,ニワトリ5
    new Sprite(161,194,30,28),//61,ニワトリ6

    new Sprite( 4,230, 22,26),//62,たまご1
    new Sprite( 41,230,22,26),//63,たまご2
    new Sprite( 73,230,22,26),//64,たまご3
    new Sprite(105,230,22,26),//65,たまご4
    new Sprite(137,230,22,26),//66,たまご5

    new Sprite( 6,261, 24,28),//67,殻帽ヒヨコ1
    new Sprite( 38,261,24,28),//68,殻帽ヒヨコ2
    new Sprite( 70,261,24,28),//69,殻帽ヒヨコ3
    new Sprite(102,261,24,28),//70,殻帽ヒヨコ4
    new Sprite(135,261,24,28),//71,殻帽ヒヨコ5

    new Sprite(206, 58,69,73),//72,黄色(中)
    new Sprite(204,134,69,73),//73,ピンク(中)
    new Sprite(205,212,69,78),//74,青グラサン(中)

    new Sprite(22,85,112,143),//75,チャーリー(大)
    new Sprite(336,151,139,147),//76,ピンク(大)
    new Sprite(336,301,139,155),//77,青グラサン(大)
];