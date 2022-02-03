<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon.jpeg">
    <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers">
    <title>JOIN</title>
</head>
<body>
    <form action="create.php" method="POST">
        <fieldset>
            <legend>JOIN</legend>
            <a href="read.php">OTHER DJ'S</a>
            <div class="title">
                NAME: <input id="text" type="text" name="name">
            </div>
            <div class="title">
                SINCE: <input id="text" type="text" name="reki">
            </div>
            <div class="title">
                GENRE: <input id="text" type="text" name="genre">
            </div>
            <div class="title">
                AREA: <input id="text" type="text" name="area">
            </div>
            <div class="title">
                SKILL: <input id="text" type="text" name="skill">
            </div>
            <div class="title">
                URL: <input id="text" type="text" name="sound">
            </div>
            <section>
                <!-- <a href="#" class="btn_02_a"><span><button type="submit">SUBMIT</button></span></a> -->
                <span><button class="btn_02_a" type="submit">SUBMIT</button></span>
            </section>
            
        </fieldset>
    </form>
    <footer>
          <p><small>2022 G's FUKUOKA DEV10-05</small></p>
    </footer>
</body>
</html>