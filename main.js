// デバッグのフラグ
const DEBUG = false;

let drawCount = 0;
let fps = 0;
let lastTime = Date.now();

// スムージング
const SMOOTHING = false;

// ゲームスピード(ms)
const GAME_SPEED = 1000/60;

//音鳴らない
// const bgm = new Audio("NES-Shooter-A01-1(Stage).mp3");
// bgm.play();

// 画面サイズ
const SCREEN_W = 700;
const SCREEN_H = 380;

// キャンバスサイズ
const CANVAS_W = SCREEN_W * 2;
const CANVAS_H = SCREEN_H * 2;

// フィールドサイズ
const FIELD_W = SCREEN_W + 120;
const FIELD_H = SCREEN_H + 40;

// 星の数
const STAR_MAX = 300;

// 音鳴らない
// const music = new Audio();
// function init() {
//     music.preload = "auto";
//     music.src = "NES-Shooter-A01-1(Stage).mp3";
//     music.load();

//     music.addEventListener("ended", function() {
//         music.currentTime = 0;
//         music.play();
//     }, false);
// }

// function play() {
//     music.loop = true;
//     music.play();
// }

// init();

// キャンバス
let can = document.getElementById("can");
let con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;
con.mozimageSmoothingEnagble   = SMOOTHING;
con.webkitimageSmoothingEnable = SMOOTHING;
con.msimageSmoothingEnable     = SMOOTHING;
con.imageSmoothingEnable       = SMOOTHING;
con.font = "20px 'Impact";

// フィールド(仮想画面)
let vcan = document.createElement("canvas");
let vcon = vcan.getContext("2d");
vcan.width = FIELD_W;
vcan.height = FIELD_H;
vcon.font = "12px 'Impact";

// カメラの座標
let camera_x = 0;
let camera_y = 0;

let gameOver = false;
let score = 0;

let bossHP = 0;
let bossMHP = 0;

// 星の実体
let star = [];

// キーボードの状態
let key = [];

// オブジェクト達
let teki = [];
let teta = [];
let tama = [];
let expl = [];
let jiki = new Jiki();
// teki[0] = new Teki(75, 200 << 8, 200 << 8, 0, 0);

// ファイルを読み込み
let spriteImage = new Image();
spriteImage.src = "spriteSUPER BAD.png";

// ゲーム初期化
function gameInit() {
    for(let i = 0; i < STAR_MAX; i++)star[i] = new Star();
    setInterval(gameloop, GAME_SPEED);
}

// オブジェクトをアップデート
function updateObj(obj) {
    for(let i = obj.length-1; i >= 0; i--) {
        obj[i].update();
        if(obj[i].kill)obj.splice(i, 1);
    }
}

// オブジェクトを描画
function drawObj(obj) {
    for(let i = 0; i < obj.length; i++)obj[i].draw();
}

// 移動の処理
function updateAll() {
    updateObj(star);
    updateObj(tama);
    updateObj(teta);
    updateObj(teki);
    updateObj(expl)
    if(!gameOver)jiki.update();
}

// 描画の処理
function drawAll() {
    // 描画の処理
    vcon.fillStyle =(jiki.damage)?"red": "black";
    vcon.fillRect(camera_x, camera_y, SCREEN_W, SCREEN_H);

    drawObj(star);
    drawObj(tama);
    if(!gameOver)jiki.draw();
    drawObj(teki);
    drawObj(expl);
    drawObj(teta);
    
    // 自機の範囲 0〜　FIELD_W
    // カメラの範囲 0〜（FIELD_W-SCREEN_W)
    camera_x = Math.floor((jiki.x >> 8) / FIELD_W * (FIELD_W-SCREEN_W));
    camera_y = Math.floor((jiki.y >> 8) / FIELD_H * (FIELD_H-SCREEN_H));

    // ボスのHPを表示する
    if(bossHP > 0) {
        let sz  = (SCREEN_W - 20) * bossHP / bossMHP;
        let sz2 = (SCREEN_W - 20);

        vcon.fillStyle = "rgba(255, 0, 0, 0.5)";
        vcon.fillRect(camera_x + 10, camera_y + 10, sz, 10);
        vcon.strokeStyle = "rgba(255, 0, 0, 0.9)";
        vcon.strokeRect(camera_x + 10, camera_y + 10, sz, 10);
    }

    // 自機のHPを表示する
    if(jiki.hp > 0) {
        let sz  = (SCREEN_W - 20) * jiki.hp / jiki.mhp;
        let sz2 = (SCREEN_W - 20);

        vcon.fillStyle = "rgba(0, 0, 255, 0.5)";
        vcon.fillRect(camera_x + 10, camera_y + SCREEN_H - 14, sz, 10);
        vcon.strokeStyle = "rgba(0, 0, 255, 0.9)";
        vcon.strokeRect(camera_x + 10, camera_y + SCREEN_H - 14, sz, 10);
    }

    // スコア表示
    vcon.fillStyle = "white";
    vcon.fillText("SCORE" + score, camera_x + 10, camera_y + 14);

    // 仮想画面から実際のキャンバスにコピー
    con.drawImage(vcan, camera_x, camera_y, SCREEN_W, SCREEN_H, 0, 0, CANVAS_W, CANVAS_H);
}

// 情報の表示
function putInfo() {
    con.font = "20px 'impact'";
    con.fillStyle = "white";

    if(gameOver) {
        let s = "GAME OVER";
        let w = con.measureText(s).width;
        let x = CANVAS_W / 2 - w / 2;
        let y = CANVAS_H / 2 - 20;
        con.fillText(s, x, y);
        s = "Push 'R' key to restart !";
        w = con.measureText(s).width;
        x = CANVAS_W / 2 - w / 2;
        y = CANVAS_H / 2 - 20 + 20;
        con.fillText(s, x, y);
    }

    if(DEBUG) {
        drawCount++;
        if(lastTime +1000 <= Date.now()) {
            fps = drawCount;
            drawCount = 0;
            lastTime = Date.now();
        }

        con.font = "20px 'Impact'";
        con.fillStyle = "White";
        con.fillText("FPS:" + fps, 20, 20);
        con.fillText("Tama:" + tama.length, 20, 40);
        con.fillText("Teki:" + teki.length, 20, 60);
        con.fillText("Teta:" + teta.length, 20, 80);
        con.fillText("Expl:" + expl.length, 20, 100);
        con.fillText("X:" + (jiki.x >> 8), 20, 120);
        con.fillText("Y:" + (jiki.y >> 8), 20, 140);
        con.fillText("HP:" + jiki.hp, 20, 160);
        con.fillText("SCORE:" + score, 20, 180);
        con.fillText("COUNT:" + gameCount, 20, 200);
        con.fillText("WAVE:" + gameWave, 20, 220);
    }
}

let gameCount = 0;
let gameWave  = 0;
let gameRound = 0;

let starSpeed    = 100;
let starSpeedReq = 100;

// ゲームループ
function gameloop() {

    gameCount++;
    if(starSpeedReq > starSpeed) starSpeed++;
    if(starSpeedReq < starSpeed) starSpeed--;

    if(gameWave === 0) {
        if(rand(0, 15) === 1) {
            teki.push(new Teki(0, rand(0,FIELD_W) << 8, 0, 0, rand(300, 1200)));
        }
        if(gameCount > 60 * 20) {
            gameWave++;
            gameCount = 0;
            starSpeedReq = 200;
        }
    } else if(gameWave === 1) {
        if(rand(0, 15) === 1) {
            teki.push(new Teki(1, rand(0,FIELD_W) << 8, 0, 0, rand(300, 1200)));
        }
        if(gameCount > 60 * 20) {
            gameWave++;
            gameCount = 0;
            starSpeedReq = 100;
        }
    } else if(gameWave === 2) {
        if(rand(0, 10) === 1) {
            let r = rand(0, 1);
            teki.push(new Teki(r, rand(0,FIELD_W) << 8, 0, 0, rand(300, 1200)));
        }
        if(gameCount > 60 * 20) {
            gameWave++;
            gameCount = 0;
            teki.push(new Teki(2, (FIELD_W / 2) << 8, -(70 << 8), 0, 200));
            starSpeedReq = 600;
        }
    } else if(gameWave === 3) {
        if(teki.length === 0) {
            gameWave = 0;
            gameCount = 0;
            gameRound++;
            starSpeedReq = 100;
        }
    }

    updateAll();
    drawAll();
    putInfo();    
}

// オンロードでゲーム開始
window.onload = function() {
    gameInit();
    // teki.push(new Teki(2, (FIELD_W / 2) << 8, 0, 0, 200));
}
