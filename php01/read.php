<?php

//データまとめ用の空文字変数
$str = "";

//ファイルを開く（読み取り専用）
$file = fopen("data/dj.csv", "r");

//ファイルをロック
flock($file, LOCK_EX);

//fgets()で一行ずつ取得→$lineに格納
if($file) {
    while($line = fgets($file)) {
        //取得したデータを"$str"に追加する
        $str .= "<tr><td>{$line}<tr><td>";
    }
}

//ロックを解除する
flock($file, LOCK_UN);
//ファイルを閉じる
fclose($file);

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon.jpeg">
    <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers">
    <title>OTHER DJ'S</title>
</head>
<body>
    <fieldset class="djs">
        <legend>DJ'S</legend>
        <a href="index.php">HOME</a>
        <table>
            <thead>
                <tr>
                    <th>JOINT US</th>
                </tr>
            </thead>
            <tbody>
                <?= $str ?>
            </tbody>
        </table>
    </fieldset>
    <footer>
          <p><small>2022 G's FUKUOKA DEV10-05</small></p>
    </footer>
</body>
</html>